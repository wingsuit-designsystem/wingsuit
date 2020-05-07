import AppConfig from "./AppConfig";
import path from "path";
import BaseApp from "./BaseApp";

const appConfigStub = require('./stubs/defaultAppConfig.stub');

export default class DesignSystem {

  private resolveAppConfig(module: NodeModule, configurationOverwrites: any = {}): AppConfig {
    let config: any = {};
    try {
      config = module.require('./wingsuit.app.config');
    } catch (e) {
      if (configurationOverwrites.type === null) {
        throw new Error(`Configuration "wingsuit.app.config" not found. Message: ${e.message}`);
      }
    }
    config.path = path.dirname(module.filename);
    const mergedConfigs = Object.assign(appConfigStub, config, configurationOverwrites);
    return mergedConfigs;
  }

  public getApp(module: NodeModule, configurationOverwrites: {} = {}): BaseApp {
    const config: AppConfig = this.resolveAppConfig(module, configurationOverwrites);
    return new BaseApp(config, module);

  }

}