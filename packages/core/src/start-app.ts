/**
 * Wingsuit webpack config.
 */
import { resolveConfig, getAppPack } from './index';

const appConfig = resolveConfig(
  process.env.WINGSUIT_APP ?? 'storybook',
  process.env.NODE_ENV ?? 'development'
);
const finalConfig = getAppPack(appConfig);
module.exports = finalConfig;
