function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(
  require.context('../../source/default', true, /\.(mp4|svg|png|webp|jpg|jpeg|gif|woff|woff2|ttf)$/)
);
