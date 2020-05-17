"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasYarn = hasYarn;

var _crossSpawn = require("cross-spawn");

var _path = _interopRequireDefault(require("path"));

var _findUp = _interopRequireDefault(require("find-up"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasYarn() {
  const yarnAvailable = (0, _crossSpawn.sync)('yarn', ['--version'], {
    silent: true
  });
  const npmAvailable = (0, _crossSpawn.sync)('npm', ['--version'], {
    silent: true
  });

  const lockFile = _findUp.default.sync(['yarn.lock', 'package-lock.json']);

  const hasYarnLock = lockFile && _path.default.basename(lockFile) === 'yarn.lock';

  if (yarnAvailable.status === 0 && (hasYarnLock || npmAvailable.status !== 0)) {
    return true;
  }

  return false;
}