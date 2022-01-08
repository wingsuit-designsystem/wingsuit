import { AppConfig } from '../../index';

const path = require('path');
const fs = require('fs');

export interface Map {
  [key: string]: FileItem;
}

export interface FileItem {
  targetPath: string;
  identifier: string;
  content: string;
  write: boolean;
}

export default class FileDependencyPlugin {
  static filesMap: Map = {};

  static addFile(identifier, sourcePath, targetRelativePath, content) {
    // Check for file with same identifier.
    let check = false;
    Object.keys(FileDependencyPlugin.filesMap).forEach((loopPath) => {
      if (
        FileDependencyPlugin.filesMap[loopPath].identifier === identifier &&
        loopPath !== sourcePath
      ) {
        check = true;
      }
    });
    if (check) {
      console.error(`File ${sourcePath} for identifer ${identifier} already added.`);
      return true;
    }
    // If found set "loaded before file" to overwritten
    FileDependencyPlugin.filesMap[sourcePath] = {
      targetPath: targetRelativePath,
      content,
      identifier,
      write: true,
    };
    return true;
  }

  private plugin: {} = {};

  private appConfig: AppConfig;

  constructor(appConfig: AppConfig) {
    this.appConfig = appConfig;
    this.plugin = { name: 'FileDependency' };
  }

  public apply(compiler) {
    const afterCompile = (compilation, callback) => {
      Object.keys(FileDependencyPlugin.filesMap).forEach((loopPath) => {
        const file = FileDependencyPlugin.filesMap[loopPath];
        if (file.write === true) {
          const targetPath = path.join(this.appConfig.absDistFolder, file.targetPath);
          fs.mkdir(path.dirname(targetPath), { recursive: true }, (err) => {
            if (err) throw err;
            const content =
              typeof file.content !== 'string' ? JSON.stringify(file.content) : file.content;
            fs.writeFile(targetPath, content, (fileErr) => {
              if (fileErr) throw fileErr;
              file.write = false;
            });
          });
        }
      });
      callback(null);
    };

    if (compiler.hooks) {
      compiler.hooks.afterCompile.tapAsync(this.plugin, afterCompile);
    } else {
      compiler.plugin('beforeCompile', afterCompile);
    }
  }
}
