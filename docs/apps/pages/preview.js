const { renderAll } = require('@wingsuit-designsystem/preset-pages/render');

module.exports = function render(locals, callback) {
  renderAll(require.context('./pages', true, /\.pages(\.jsx|\.js)$/), locals, callback);
};
