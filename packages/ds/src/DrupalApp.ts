import IApp from "./IApp";
import AppConfig from "./AppConfig";

export default class DrupalApp implements IApp {
  private _appConfig:AppConfig;
  constructor(appConfig: AppConfig) {
    this._appConfig = appConfig
  }

  init() {
  }

  public getSharedWebpackConfig():{} {
    return {};
  }

  getDevelopmentWebpackConfig(): {} {
    return {};
  }

  getProductionWebpackConfig(): {} {
    return {};
  }

}