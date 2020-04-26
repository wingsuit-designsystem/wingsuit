export default interface IApp {
  init();

  getSharedWebpackConfig(): {};

  getProductionWebpackConfig(): {};

  getDevelopmentWebpackConfig(): {};
}
