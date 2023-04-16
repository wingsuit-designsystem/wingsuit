import { resolveConfig } from '@wingsuit-designsystem/core';
import glob from 'glob';
import path from 'path';

const fs = require('fs');

export default (options) => {
  const appConfig = resolveConfig('storybook');
  Object.values(appConfig.namespaces).forEach((namespace) => {
    const globPattern = `${namespace}/**/*.stories.jsx`;
    const files = glob.sync(globPattern);
    files.forEach((file) => {
      const fileName = path.basename(file).replace('.stories.jsx', '.stories.wingsuit.jsx');
      const directory = path.dirname(file);
      fs.renameSync(file, `${directory}/${fileName}`, (err) => {
        if (err) throw err;
      });
    });
  });
};
