import * as path from 'path';
import AppConfig from './AppConfig';
import DesignSystemConfig from './DesignSystemConfig';

const configStub = require('./stubs/defaultRootConfig.stub');

export default class BaseApp  {
  protected appConfig: AppConfig;

  protected designSystemConfig: DesignSystemConfig;

  protected module: NodeModule;

  public getModule(): NodeModule {
    return this.module;
  }

  public getAppConfig(): AppConfig {
    return this.appConfig;
  }

  public getDesignSystemConfig(): DesignSystemConfig {
    return this.designSystemConfig;
  }

  private findDesignSystemConfig(module: NodeModule): DesignSystemConfig {
    const configName = path.join(path.dirname(module.filename), `./${this.appConfig.root}wingsuit.root.config.js`);
    try {
      const resolvedFilename = require.resolve(configName);
      const root = path.dirname(resolvedFilename);
      const rootConfig: DesignSystemConfig = module.require(configName);
      rootConfig.path = root;
      const mergedConfigs = Object.assign(configStub, rootConfig);
      return mergedConfigs;
    } catch (e) {
      throw new Error(`Configuration "wingsuit.root.config" not found in ${configName}. Message: ${e.message}`);
    }

  }

  constructor(appConfig: AppConfig, module: NodeModule) {
    this.appConfig = appConfig;
    this.designSystemConfig = this.findDesignSystemConfig(module);
    this.module = module;
  }

}
