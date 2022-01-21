import { glob } from 'glob';
import { AppConfig } from '../../index';
import { syncSilo } from "../../index";

const path = require('path');

export default class Svg2JsonPlugin {
  private readonly sourceFolder: string;

  private readonly targetJsonFlename: string;

  private plugin: {} = {};

  private appConfig: AppConfig;

  constructor(sourceFolder, targetJsonFilename, appConfig: AppConfig) {
    this.sourceFolder = sourceFolder;
    this.targetJsonFlename = targetJsonFilename;
    this.appConfig = appConfig;
    this.plugin = { name: 'Svg2JsonPlugin' };
  }

  public apply(compiler) {
    const beforeCompile = (compilation, callback) => {
      const filename = this.targetJsonFlename;
      const { sourceFolder, appConfig } = this;
      const svgs: string[] = [];
      const searchFiles = `${appConfig.absPatternPath}/**/${sourceFolder}/*.svg`;

      const files = glob.sync(searchFiles);
      files.forEach((file) => {
        svgs.push(path.basename(file, '.svg'));
      });
      const data = { svgs };
      syncSilo(filename, data);
      callback(null);
    };

    if (compiler.hooks) {
      compiler.hooks.beforeCompile.tapAsync(this.plugin, beforeCompile);
    } else {
      compiler.plugin('beforeCompile', beforeCompile);
    }
  }
}
