function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('wsdesignsystem', true, /\.(vendor\.js)$/));
requireAll(require.context('wsdesignsystem', true, /\.(behavior\.js)$/));
