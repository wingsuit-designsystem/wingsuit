/**
 * Wingsuit webpack config.
 */
import { resolveConfig, getAppPack } from './index'; 
const appConfig = resolveConfig(process.env.WINGSUIT_APP ?? 'storybook', process.env.NODE_ENV ?? 'develop');
const finalConfig = getAppPack(appConfig);
module.exports = finalConfig;
