function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(
  require.context(
    '../../source/default',
    true,
    /\.(svg|png|jpg|jpeg|webp|gif|woff|woff2|yml|yaml|twig)$/
  )
);
