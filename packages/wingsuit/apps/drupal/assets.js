function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../../source/default', true, /\.(svg|png|jpg|jpeg|gif)$/));
