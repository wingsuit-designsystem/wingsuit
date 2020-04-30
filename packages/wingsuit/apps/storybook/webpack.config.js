const path = require("path");

/**
 * Wingsuit webpack config.
 */
const namespaces = require('../../source/default/namespaces');
const wingsuit = require('@wingsuit-designsystem/core');
const pattern = require('@wingsuit-designsystem/pattern');
pattern.twigRenderEngine.setNamespaces(namespaces);
module.exports = wingsuit.getAppPack('development', module, {'cssMode': 'hot'});
