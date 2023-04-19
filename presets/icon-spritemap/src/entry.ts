function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('wsdesignsystem', true, /\.svg/));
