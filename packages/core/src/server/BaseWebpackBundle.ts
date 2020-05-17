import WebpackBundle from "./WebpackBundle";
import AppConfig from "../AppConfig";

export abstract class BaseWebpackBundle implements WebpackBundle {

  protected appConfig: AppConfig;

  protected name;

  protected sharedWebpackConfig: {} = {};

  protected developmentWebpackConfig: {} = {};

  protected productionWebpackConfig: {} = {};

  public constructor(name, appConfig:AppConfig) {
    this.appConfig = appConfig;
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public getSharedWebpackConfig(): {} {
    return this.sharedWebpackConfig;
  }

  getDevelopmentWebpackConfig(): {} {
    return this.developmentWebpackConfig;
  }

  getProductionWebpackConfig(): {} {
    return this.productionWebpackConfig;
  }

  alterFinalConfig(config: any): {} {
    return config;
  }
}