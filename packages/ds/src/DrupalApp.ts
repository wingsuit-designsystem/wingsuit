import IApp from './IApp';
import AppConfig from './AppConfig';

export default class DrupalApp implements IApp {

  constructor(appConfig: AppConfig) {
  }

  init() {}

  public getSharedWebpackConfig(): {} {
    return {};
  }

  getDevelopmentWebpackConfig(): {} {
    return {};
  }

  getProductionWebpackConfig(): {} {
    return {};
  }
}
