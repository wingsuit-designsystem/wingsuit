import { resolveConfig } from '@wingsuit-designsystem/core';
import glob from 'glob';

const fs = require('fs');

export default function (options) {
  const appConfig = resolveConfig('storybook');
  Object.values(appConfig.namespaces).forEach((path) => {
    const globPattern = `${path}/**/*.stories.jsx`;
    const files = glob.sync(globPattern);
    files.forEach((file) => {
      const fileName = fs.basename(file).replace('.stories.jsx', '.stories.wingsuit.jsx');
      const directory = fs.dirname(file);
      fs.renameSync(file, `${directory}/${fileName}`, (err) => {
        if (err) throw err;
      });
    });
  });
}
