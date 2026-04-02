import { fileURLToPath } from 'node:url';
import {resolveConfig, getAppPack} from "@wingsuit-designsystem/core";
import Mdx from '@next/mdx';

const localYamlLoader = fileURLToPath(new URL('./loaders/js-yaml-loader.cjs', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
      mdxRs: true,
    },
    typescript: {

        // Disable for now.
        ignoreBuildErrors: true,
    },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (isServer) {
      // Important: return the modified config
      const wingsuitConfig = resolveConfig('nextjs');
      const wingsuitWebpack = getAppPack(wingsuitConfig, []);
      config.module.rules = [...config.module.rules, ...wingsuitWebpack.module.rules]
      config.module = {
        ...config.module,
        exprContextCritical: false,
      };
      config.plugins = [...config.plugins, ...wingsuitWebpack.plugins].filter((plugin, index)=>{ return plugin.constructor.name !== 'NodePolyfillPlugin' })
      config.resolve.alias = {...config.resolve.alias, ...wingsuitWebpack.resolve.alias}
      config.resolveLoader.alias = {
        ...config.resolveLoader.alias,
        ...wingsuitWebpack.resolveLoader.alias ?? {},
        'js-yaml-loader': localYamlLoader,
      }
    }

    return config;
  },
}

const withMDX = Mdx({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [['@shikijs/rehype', { theme: 'github-dark' }]],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig);
