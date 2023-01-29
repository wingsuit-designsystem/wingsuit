import glob from 'glob';

const YAML = require('yaml');

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

  private pattern2NamespaceCache: { [key: string]: string } = {};
  private patternIndex2NamespaceCache: { [key: string]: string } = {};

  private namespaces: { [key: string]: string } = {};

  buildPatternNamespaceMap() {
    const { namespaces } = this;
    this.pattern2NamespaceCache = {};
    this.patternIndex2NamespaceCache = {};
    Object.keys(namespaces).forEach((namespace) => {
      const namespacePath = namespaces[namespace];
      const globPattern = `${namespacePath}/**/*.wingsuit.yml`;
      const files = glob.sync(globPattern);
      files.forEach((file) => {
        const wingsuitFile = YAML.parse(fs.readFileSync(file, 'utf-8'));
        const componentFile = fs.existsSync(`${path.dirname(file)}/index.js`)
          ? path.dirname(file) : null;

        Object.keys(wingsuitFile).forEach((key) => {
          if (!this.pattern2NamespaceCache[key]) {
            this.pattern2NamespaceCache[key] = file.replace(
              namespacePath,
              namespace
            );
          }
          if (!this.patternIndex2NamespaceCache[key] && componentFile) {
            this.patternIndex2NamespaceCache[key] = componentFile.replace(
              namespacePath,
              namespace
            );
          }
        });
      });
    });
    return this.pattern2NamespaceCache;
  }

  public getPatternNamespace(namespace) {
    return this.pattern2NamespaceCache[namespace];
  }

  public getPatternComponentNamespace(namespace) {
    return this.patternIndex2NamespaceCache[namespace];
  }

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

  constructor(dist: string, namespaces: { [key: string]: string }) {
    this.dist = dist;
    this.plugin = { name: 'FileDependency' };
    this.namespaces = namespaces;
  }

  public apply(compiler) {
    const beforeCompile = (compilation, callback) => {
      this.buildPatternNamespaceMap();
      callback();
    };

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
      compiler.hooks.beforeCompile.tapAsync(this.plugin, beforeCompile);
    } else {
      compiler.plugin('beforeCompile', beforeCompile);
      compiler.plugin('afterCompile', afterCompile);
    }
  }
}
