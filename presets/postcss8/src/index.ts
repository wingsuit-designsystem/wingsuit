const postCss8 = require('postcss');

export function wingsuitConfig(): {} {
  return {
    postCssConfig: {
      options: {
        implementation: postCss8,
        postcssOptions: {
          plugins: [['postcss-preset-env', {}]],
        },
      },
    },
  };
}
