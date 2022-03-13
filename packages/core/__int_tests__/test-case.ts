import { resolve as resolvePath } from 'path';

import { Compiler, Configuration } from 'webpack';

const MemoryFileSystem = require('memory-fs');
const webpack = require('webpack');

export abstract class TestCase {
  public readonly renderContext: any;

  constructor(renderContext: any = undefined) {
    this.renderContext = renderContext;
  }

  abstract get expected(): string;

  get environmentModulePath(): string {
    return 'test/integration/environment.js';
  }

  abstract get entry(): string;

  get configuration(): Configuration {
    return {};
  }

  public compile(configuration: Configuration): Promise<MemoryFileSystem> {
    return new Promise((resolve, reject) => {
      const compiler: Compiler = webpack(configuration);
      const memoryFs = new MemoryFileSystem();

      compiler.outputFileSystem = memoryFs;

      compiler.run((err, stats) => {
        if (err || stats.hasErrors()) {
          if (err) {
            reject(err);
          } else {
            reject(new Error(stats.toJson('errors-only').errors.join('')));
          }
        } else {
          resolve(memoryFs);
        }
      });
    });
  }
}
