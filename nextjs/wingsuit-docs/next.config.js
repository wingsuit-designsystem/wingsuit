const wingsuitCore = require("@wingsuit-designsystem/core");
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (isServer) {
      // Important: return the modified config
      const wingsuitConfig = wingsuitCore.resolveConfig('nextjs');
      const wingsuitWebpack = wingsuitCore.getAppPack(wingsuitConfig, []);
      config.module.rules = [...config.module.rules, ...wingsuitWebpack.module.rules]
      config.module = {
        ...config.module,
        exprContextCritical: false,
      };
      config.plugins = [...config.plugins, ...wingsuitWebpack.plugins].filter((plugin, index)=>{ return plugin.constructor.name !== 'NodePolyfillPlugin' })
      config.resolve.alias = {...config.resolve.alias, ...wingsuitWebpack.resolve.alias}
      config.resolveLoader.alias = {...config.resolveLoader.alias, ...wingsuitWebpack.resolveLoader.alias ?? {}}
    }
    config.module.rules.push({
      test: [/node_modules[\\/]react-tabs[\\/.].*\.js$/], /// replace here make match your package
      loader: require.resolve("./loaders/use-client-loader.js"),
    });

    return config;
  },
}

const withMDX = require('@next/mdx')({
  experimental: {
    mdxRs: true,
  },
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX(nextConfig);
