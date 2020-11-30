function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('wsdesignsystem', true, /\.(svg|png|webp|jpg|jpeg|gif|woff|woff2)$/));
