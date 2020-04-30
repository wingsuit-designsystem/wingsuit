import ConfigBundle from "./ConfigBundle";
import RootConfig from "./RootConfig";
import AppConfig from "./AppConfig";

export abstract class BaseConfigBundle implements ConfigBundle {
  protected appConfig: AppConfig;

  protected rootConfig: RootConfig;

  protected name;

  protected sharedWebpackConfig: {} = {};

  protected developmentWebpackConfig: {} = {};

  protected productionWebpackConfig: {} = {};

  protected constructor(name, rootConfig: RootConfig, appConfig: AppConfig) {
    this.appConfig = appConfig;
    this.rootConfig = rootConfig;
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
}