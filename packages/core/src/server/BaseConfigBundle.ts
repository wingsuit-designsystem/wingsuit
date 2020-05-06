import ConfigBundle from "./ConfigBundle";
import RootConfig from "./RootConfig";
import AppConfig from "./AppConfig";
import BaseApp from "./BaseApp";

export abstract class BaseConfigBundle implements ConfigBundle {
  protected app: BaseApp;

  protected appConfig: AppConfig;

  protected rootConfig: RootConfig;

  protected name;

  protected sharedWebpackConfig: {} = {};

  protected developmentWebpackConfig: {} = {};

  protected productionWebpackConfig: {} = {};

  protected constructor(name, app:BaseApp) {
    this.appConfig = app.getAppConfig();
    this.rootConfig = app.getRootConfig();
    this.app = app;
    this.name = name;
  }

  public getApp():BaseApp {
    return this.app;
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