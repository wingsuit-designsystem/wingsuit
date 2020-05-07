import ConfigBundle from "./ConfigBundle";
import DesignSystemConfig from "../common/DesignSystemConfig";
import AppConfig from "../common/AppConfig";
import BaseApp from "../common/BaseApp";

export abstract class BaseConfigBundle implements ConfigBundle {
  protected app: BaseApp;

  protected appConfig: AppConfig;

  protected designSystemConfig: DesignSystemConfig;

  protected name;

  protected sharedWebpackConfig: {} = {};

  protected developmentWebpackConfig: {} = {};

  protected productionWebpackConfig: {} = {};

  protected constructor(name, app:BaseApp) {
    this.appConfig = app.getAppConfig();
    this.designSystemConfig = app.getDesignSystemConfig();
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