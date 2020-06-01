import { exec } from 'child_process';
import chalk from 'chalk';
import path from 'path';
import program from 'commander';
import detectFreePort from 'detect-port';
import dedent from 'ts-dedent';
import fs from 'fs';
import yaml from 'js-yaml';
import nodeCleanup from 'node-cleanup';

import startVerdaccioServer from 'verdaccio';
import pLimit from 'p-limit';
import { listOfPackages, Package } from './utils/list-packages';

program
  .option('-O, --open', 'keep process open')
  .option('-P, --publish', 'should publish packages')
  .option('-p, --port <port>', 'port to run https server on');

program.parse(process.argv);

const logger = console;

const freePort = (port?: number) => port || detectFreePort(port);

const startVerdaccio = (port: number) => {
  let resolved = false;
  return Promise.race([
    new Promise((resolve) => {
      const cache = path.join(__dirname, '..', '.verdaccio-cache');
      const config = {
        ...yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'verdaccio.yaml'), 'utf8')),
        self_path: cache,
      };

      const onReady = (webServer: any) => {
        webServer.listen(port, () => {
          resolved = true;
          resolve(webServer);
        });
      };

      startVerdaccioServer(config, 6000, cache, '1.0.0', 'verdaccio', onReady);
    }),
    new Promise((_, rej) => {
      setTimeout(() => {
        if (!resolved) {
          resolved = true;
          rej(new Error(`TIMEOUT - verdaccio didn't start within 60s`));
        }
      }, 60000);
    }),
  ]);
};
const registryUrl = (command: string, url?: string) =>
  new Promise<string>((res, rej) => {
    const args = url ? ['config', 'set', 'registry', url] : ['config', 'get', 'registry'];
    exec(`${command} ${args.join(' ')}`, (e, stdout) => {
      if (e) {
        rej(e);
      } else {
        res(url || stdout.toString().trim());
      }
    });
  });

const registriesUrl = (yarnUrl?: string, npmUrl?: string) =>
  Promise.all([registryUrl('yarn', yarnUrl), registryUrl('npm', npmUrl || yarnUrl)]);

const applyRegistriesUrl = (
  yarnUrl: string,
  npmUrl: string,
  originalYarnUrl: string,
  originalNpmUrl: string
) => {
  logger.log(`↪️  changing system config`);
  nodeCleanup(() => {
    registriesUrl(originalYarnUrl, originalNpmUrl);

    logger.log(dedent`
      Your registry config has been restored from:
      npm: ${npmUrl} to ${originalNpmUrl} 
      yarn: ${yarnUrl} to ${originalYarnUrl} 
    `);
  });

  return registriesUrl(yarnUrl, npmUrl);
};

const addUser = (url: string) =>
  new Promise((res, rej) => {
    logger.log(`👤 add temp user to verdaccio`);

    exec(`npx npm-cli-adduser -r "${url}" -a -u user -p password -e user@example.com`, (e) => {
      if (e) {
        rej(e);
      } else {
        res();
      }
    });
  });

const currentVersion = async () => {
  const { version } = (await import('../lerna.json')).default;
  return version;
};

const publish = (packages: { name: string; location: string }[], url: string) => {
  const limit = pLimit(3);

  return Promise.all(
    packages.map(({ name, location }) =>
      limit(
        () =>
          new Promise((res, rej) => {
            logger.log(`🛫 publishing ${name} (${location})`);
            const command = `cd ${location} && npm publish --registry ${url} --force --access restricted`;
            exec(command, (e) => {
              if (e) {
                rej(e);
              } else {
                logger.log(`🛬 successful publish of ${name}!`);
                res();
              }
            });
          })
      )
    )
  );
};

const run = async () => {
  const port = await freePort(program.port);
  logger.log(`🌏 found a open port: ${port}`);

  const verdaccioUrl = `http://localhost:${port}`;

  logger.log(`🔖 reading current registry settings`);
  let [originalYarnRegistryUrl, originalNpmRegistryUrl] = await registriesUrl();
  if (
    originalYarnRegistryUrl.includes('localhost') ||
    originalNpmRegistryUrl.includes('localhost')
  ) {
    originalYarnRegistryUrl = 'https://registry.npmjs.org/';
    originalNpmRegistryUrl = 'https://registry.npmjs.org/';
  }

  logger.log(`📐 reading version of storybook`);
  logger.log(`🚛 listing storybook packages`);
  logger.log(`🎬 starting verdaccio (this takes ±5 seconds, so be patient)`);

  const [verdaccioServer, packages, version] = await Promise.all<any, Package[], string>([
    startVerdaccio(port),
    listOfPackages(),
    currentVersion(),
  ]);

  logger.log(`🌿 verdaccio running on ${verdaccioUrl}`);

  await applyRegistriesUrl(
    verdaccioUrl,
    verdaccioUrl,
    originalYarnRegistryUrl,
    originalNpmRegistryUrl
  );

  // await addUser(verdaccioUrl);

  logger.log(`📦 found ${packages.length} storybook packages at version ${chalk.blue(version)}`);

  if (program.publish) {
    await publish(packages, verdaccioUrl);
  }

  if (!program.open) {
    verdaccioServer.close();
  }
};

run().catch((e) => {
  logger.error(e);
  process.exit(1);
});
