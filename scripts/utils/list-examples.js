import { statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const p = (l) => join(__dirname, '..', '..', ...l);

export const getDeployables = (files, extraFilter) => {
  return files.filter((f) => {
    const packageJsonLocation = p(['examples', f, 'package.json']);
    let stats = null;
    try {
      stats = statSync(packageJsonLocation);
    } catch (e) {
      // the folder had no package.json, we'll ignore
    }

    return stats && stats.isFile() && extraFilter(packageJsonLocation);
  });
};
