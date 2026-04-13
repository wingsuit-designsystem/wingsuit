import path from 'path';

type FsMockState = {
  existingPaths: Set<string>;
  files: Map<string, string>;
  writes: Array<{ file: string; content: string }>;
};

const ORIGINAL_ENV = process.env;
const starterKitPkg = {
  devDependencies: {
    '@wingsuit-designsystem/core': 'workspace-core',
    react: 'react-version',
  },
  dependencies: {
    '@wingsuit-designsystem/preset-storybook': 'workspace-preset',
  },
  optionalDependencies: {
    '@wingsuit-designsystem/preset-tailwind': 'workspace-optional',
  },
  resolutions: {
    existing: 'starter-resolution',
  },
};

const createFsMock = (state: FsMockState) => ({
  existsSync: jest.fn((filePath: string) => state.existingPaths.has(filePath)),
  mkdirSync: jest.fn((filePath: string) => {
    state.existingPaths.add(filePath);
  }),
  readFileSync: jest.fn((filePath: string, encoding?: BufferEncoding) => {
    const value = state.files.get(filePath);

    if (value == null) {
      throw new Error(`Missing mock file: ${filePath}`);
    }

    return encoding ? value : Buffer.from(value);
  }),
  writeFileSync: jest.fn((filePath: string, content: string) => {
    state.files.set(filePath, content);
    state.writes.push({ file: filePath, content });
  }),
});

const loadCliInit = ({
  env = {},
  hasYarn = true,
  spawnImpl,
  globMatches = [],
  rootPackageJson,
  localWorkspacePackages = {},
  installedPackages = {},
}: {
  env?: NodeJS.ProcessEnv;
  hasYarn?: boolean;
  spawnImpl?: (command: string, args: string[], options: { cwd: string }) => { status: number };
  globMatches?: string[];
  rootPackageJson?: Record<string, unknown>;
  localWorkspacePackages?: Record<string, { name: string }>;
  installedPackages?: Record<string, { version: string }>;
} = {}) => {
  jest.resetModules();
  process.env = {
    ...ORIGINAL_ENV,
    ...env,
  };

  const folder = path.resolve('tmp/test-app');
  const checkoutFolder = path.join(folder, '../');
  const gitFolder = path.join(folder, '../', 'wscheckout');
  const starterKitPackagePath = `${gitFolder}/starter-kits/tailwind/package.json`;
  const localRepo = process.env.WINGSUIT_LOCAL_REPO;

  const state: FsMockState = {
    existingPaths: new Set<string>([gitFolder]),
    files: new Map<string, string>([
      [
        starterKitPackagePath,
        JSON.stringify(starterKitPkg),
      ],
    ]),
    writes: [],
  };

  if (localRepo && rootPackageJson) {
    const rootPackagePath = path.join(localRepo, 'package.json');
    state.existingPaths.add(rootPackagePath);
    state.files.set(rootPackagePath, JSON.stringify(rootPackageJson));
  }

  if (localRepo) {
    Object.entries(localWorkspacePackages).forEach(([packageFile, pkg]) => {
      state.files.set(packageFile, JSON.stringify(pkg));
    });

    Object.entries(installedPackages).forEach(([packageName, pkg]) => {
      state.files.set(
        path.join(localRepo, 'node_modules', packageName, 'package.json'),
        JSON.stringify(pkg)
      );
    });
  }

  const fsMock = createFsMock(state);
  const spawnSync = jest.fn(
    spawnImpl ||
      ((command: string) => {
        if (command === 'git') {
          return { status: 0, output: [null, Buffer.from('taghash\n'), null] };
        }

        return { status: 0 };
      })
  );
  const mv = jest.fn((_from: string, _to: string, callback: (err?: Error) => void) => callback());
  const rimraf = { sync: jest.fn() };
  const glob = { sync: jest.fn(() => globMatches) };

  jest.doMock('child_process', () => ({ spawnSync }));
  jest.doMock('fs', () => fsMock);
  jest.doMock('glob', () => glob);
  jest.doMock('mv', () => mv);
  jest.doMock('rimraf', () => rimraf);
  jest.doMock('../src/has_yarn', () => ({ hasYarn: jest.fn(() => hasYarn) }));

  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const cliInit = require('../src/cli-init').default;

  return {
    cliInit,
    folder,
    fsMock,
    glob,
    mv,
    rimraf,
    spawnSync,
    starterKitPackagePath,
    state,
  };
};

describe('cli-init', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  test('keeps semver workspace deps when no local repo is configured', () => {
    const { cliInit, state, starterKitPackagePath } = loadCliInit();

    cliInit({ folder: 'tmp/test-app', starterKit: 'tailwind', skipInstall: true });

    const pkg = JSON.parse(state.files.get(starterKitPackagePath) || '{}');
    expect(pkg.dependencies['@wingsuit-designsystem/preset-storybook']).toBe(
      starterKitPkg.dependencies['@wingsuit-designsystem/preset-storybook']
    );
    expect(pkg.optionalDependencies['@wingsuit-designsystem/preset-tailwind']).toBe(
      starterKitPkg.optionalDependencies['@wingsuit-designsystem/preset-tailwind']
    );
    expect(pkg.devDependencies['@wingsuit-designsystem/core']).toBe(
      `^${starterKitPkg.devDependencies['@wingsuit-designsystem/core']}`
    );
    expect(pkg.resolutions).toEqual(starterKitPkg.resolutions);
  });

  test('rewrites matching workspace deps to local file paths and merges resolutions', () => {
    const localRepo = '/tmp/local-wingsuit';
    const presetPackagePath = path.join(localRepo, 'presets', 'storybook', 'package.json');
    const corePackagePath = path.join(localRepo, 'packages', 'core', 'package.json');

    const { cliInit, state, starterKitPackagePath, glob } = loadCliInit({
      env: { WINGSUIT_LOCAL_REPO: localRepo },
      globMatches: [corePackagePath, presetPackagePath],
      rootPackageJson: {
        resolutions: {
          fromRoot: 'root-resolution',
        },
      },
      installedPackages: {
        'yocto-queue': {
          version: 'local-yocto-version',
        },
      },
      localWorkspacePackages: {
        [corePackagePath]: { name: '@wingsuit-designsystem/core' },
        [presetPackagePath]: { name: '@wingsuit-designsystem/preset-storybook' },
      },
    });

    cliInit({ folder: 'tmp/test-app', starterKit: 'tailwind', skipInstall: true });

    const pkg = JSON.parse(state.files.get(starterKitPackagePath) || '{}');
    expect(glob.sync).toHaveBeenCalledWith('{packages,presets}/*/package.json', {
      cwd: localRepo,
      absolute: true,
    });
    expect(pkg.devDependencies['@wingsuit-designsystem/core']).toBe(`file:${path.dirname(corePackagePath)}`);
    expect(pkg.dependencies['@wingsuit-designsystem/preset-storybook']).toBe(
      `file:${path.dirname(presetPackagePath)}`
    );
    expect(pkg.optionalDependencies['@wingsuit-designsystem/preset-tailwind']).toBe(
      starterKitPkg.optionalDependencies['@wingsuit-designsystem/preset-tailwind']
    );
    expect(pkg.resolutions).toMatchObject({
      fromRoot: 'root-resolution',
      existing: 'starter-resolution',
      'yocto-queue': 'local-yocto-version',
    });
  });

  test('exits with the install status when yarn install fails', () => {
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation((code?: number) => {
      throw new Error(`exit:${code}`);
    });
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { cliInit, spawnSync } = loadCliInit({
      spawnImpl: (command: string, args: string[]) => {
        if (command === 'yarn' && args[0] === 'install') {
          return { status: 2 };
        }

        if (command === 'git') {
          return { status: 0, output: [null, Buffer.from('taghash\n'), null] };
        }

        return { status: 0 };
      },
    });

    expect(() =>
      cliInit({ folder: 'tmp/test-app', starterKit: 'tailwind', skipInstall: false })
    ).toThrow('exit:2');
    expect(errorSpy).toHaveBeenCalledWith('Wingsuit dependency installation failed.');
    expect(spawnSync).toHaveBeenCalledWith(
      'yarn',
      ['install'],
      expect.objectContaining({ cwd: path.resolve('tmp/test-app') })
    );

    exitSpy.mockRestore();
    errorSpy.mockRestore();
  });

  test('exits with the setup status when npm setup fails', () => {
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation((code?: number) => {
      throw new Error(`exit:${code}`);
    });
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { cliInit, spawnSync } = loadCliInit({
      hasYarn: false,
      spawnImpl: (command: string, args: string[]) => {
        if (command === 'npm' && args[0] === 'run' && args[1] === 'dev:storybook') {
          return { status: 3 };
        }

        if (command === 'git') {
          return { status: 0, output: [null, Buffer.from('taghash\n'), null] };
        }

        return { status: 0 };
      },
    });

    expect(() =>
      cliInit({ folder: 'tmp/test-app', starterKit: 'tailwind', skipInstall: false })
    ).toThrow('exit:3');
    expect(errorSpy).toHaveBeenCalledWith('Wingsuit setup failed.');
    expect(spawnSync).toHaveBeenCalledWith(
      'npm',
      ['run', 'dev:storybook'],
      expect.objectContaining({ cwd: path.resolve('tmp/test-app') })
    );

    exitSpy.mockRestore();
    errorSpy.mockRestore();
  });
});
