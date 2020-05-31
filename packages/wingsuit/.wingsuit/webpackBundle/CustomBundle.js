const wingsuitCore = require("@wingsuit-designsystem/core");

class CustomBundle extends wingsuitCore.BaseWebpackBundle {
  getSharedWebpackConfig() {
    // Custom webpack config.
    return {}
  }
}

module.exports = CustomBundle;
