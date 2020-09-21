import { sync as spawnSync } from 'cross-spawn';

export function hasYarn() {
  const yarnAvailable = spawnSync('yarn', ['--version'], { silent: true });

  if (yarnAvailable.status === 0) {
    return true;
  }
  return false;
}
