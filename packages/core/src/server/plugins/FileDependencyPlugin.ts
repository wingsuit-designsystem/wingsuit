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
  private filesMap = new Map<string, FileItem>();

  addFile(identifier, sourcePath, targetRelativePath, content) {
    // Check for file with same identifier.
    let check = false;
    Object.keys(this.filesMap).forEach((loopPath) => {
      if (this.filesMap[loopPath].identifier === identifier && loopPath !== sourcePath) {
        check = true;
      }
    });
    if (check) {
      console.error(`File ${sourcePath} for identifier ${identifier} already added.`);
      return true;
    }
    // If found set "loaded before file" to overwritten
    this.filesMap[sourcePath] = {
      targetPath: targetRelativePath,
      content,
      identifier,
      write: true,
    };
    return true;
  }

  private plugin: {} = {};

  private dist: string;

  constructor(dist: string) {
    this.dist = dist;
    this.plugin = { name: 'FileDependency' };
  }

  public apply(compiler) {
    const afterCompile = (compilation, callback) => {
      Object.keys(this.filesMap).forEach((loopPath) => {
        const file = this.filesMap[loopPath];
        if (file.write === true) {
          const targetPath = path.join(this.dist, file.targetPath);
          fs.mkdirSync(path.dirname(targetPath), { recursive: true });
          const content =
            typeof file.content !== 'string' ? JSON.stringify(file.content) : file.content;
          fs.writeFileSync(targetPath, content);
        }
      });
      callback();
    };

    if (compiler.hooks) {
      compiler.hooks.afterCompile.tapAsync(this.plugin, afterCompile);
    } else {
      compiler.plugin('afterCompile', afterCompile);
    }
  }
}
