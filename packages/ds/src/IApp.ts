import AppConfig from "./AppConfig";

export default interface IApp {
  init();

  getSharedWebpackConfig(): {};

  getProductionWebpackConfig(): {};

  getDevelopmentWebpackConfig(): {};

}