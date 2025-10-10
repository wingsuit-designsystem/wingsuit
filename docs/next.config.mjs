import {resolveConfig, getAppPack} from "@wingsuit-designsystem/core";
import rehypeShiki from '@shikijs/rehype'
import Mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
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
      config.resolveLoader.alias = {...config.resolveLoader.alias, ...wingsuitWebpack.resolveLoader.alias ?? {}}
    }

    return config;
  },
}

const withMDX = Mdx({
  experimental: {
    mdxRs: true,
  },
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [[rehypeShiki,{ theme: "github-dark"}]],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig);
