export const wingsuit = {
  designSystems: {
    default: {
      path: "source/default",
      patternPath: "patterns",
      namespaces: {}
    }
  },
  environments: {
    development: {},
    production: {}
  },
  apps: {
    storybook: {
      type: "storybook",
      path: "./apps/storybook",
      cssMode: "hot",
      distFolder: "dist/app-storybook",
      assetBundleFolder: "assets",
      designSystem: "default",
      webpackBundles: [
        "DefaultBundle",
        "StorybookAssetBundle",
        "TwingBundle",
        "StorybookBundle",
        "CssBundle",
        "BabelBundle"
      ]
    },
    drupal: {
      type: "drupal",
      path: "./apps/drupal",
      cssMode: "extract",
      distFolder: "dist/app-drupal",
      assetBundleFolder: "assets",
      designSystem: "default",
      webpackBundles: [
        "BabelBundle",
        "DefaultBundle",
        "AssetBundle",
        "DrupalBundle",
        "CssBundle"
      ]
    }
  }
}
