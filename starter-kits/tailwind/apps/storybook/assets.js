function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(
  require.context('wsdesignsystem', true, /\.(mp4|svg|png|webp|jpg|jpeg|gif|woff|woff2|ttf)$/)
);
