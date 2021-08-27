const configure = require('@wingsuit-designsystem/preset-pages/configure');
const namespaces = require('wsdesignsystem/namespaces');

const htmlTemplate = require('./pages/html.twig');

module.exports = function render(locals, callback) {
  configure(
    module,
    [
      require.context('./pages', true, /\.stories(\.jsx|\.js)$/),
      require.context('wspatterns', true, /\.stories(\.jsx|\.js)$/),
    ],
    require.context('./config', false, /\.json|\.ya?ml$/),
    require.context('wspatterns', true, /\.twig$/),
    require.context('./pages', true, /\.pages(\.jsx|\.js)$/),
    namespaces,
    htmlTemplate,
    locals,
    callback
  );
};
