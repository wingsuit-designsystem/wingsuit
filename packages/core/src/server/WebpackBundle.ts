export default interface WebpackBundle {
  getName();

  getSharedWebpackConfig(): {};

  getProductionWebpackConfig(): {};

  getDevelopmentWebpackConfig(): {};

  alterFinalConfig(config: {}): {};
}
