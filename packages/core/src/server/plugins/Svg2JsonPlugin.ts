import { glob } from 'glob';
import { AppConfig } from '../../index';

const fs = require('fs-extra');
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
      const output = JSON.stringify({ svgs } );
      // Plugins are null after restoring from file system.
      // Infinite loop.
      fs.readFile(filename, (readerr, buffer) => {
        if (readerr) console.error(readerr, `Creating ${path.basename(filename)}!`);
        // Only write output if there is a difference or non-existent target file
        const existingJson = buffer.toString()
        if (output !== existingJson) {
          fs.writeFile(filename, output, (writeerr) => {
            if (writeerr) console.error(writeerr);
          });
        }
      });
    };

    if (compiler.hooks) {
      compiler.hooks.beforeCompile.tapAsync(this.plugin, beforeCompile);
    } else {
      compiler.plugin('beforeCompile', beforeCompile);
    }
  }
}
