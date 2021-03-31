import React from 'react';
import 'protons';
import MDX from './svg.mdx';

export default {
  path: '/assets/svg',
};

const template = require('../../docs.twig');

export const getProps = async (ctx, renderer, renderToStaticMarkup) => {
  const props = {};
  props.page = await renderer.renderData(ctx.path, template.default, {
    content: renderToStaticMarkup(<MDX />),
  });
  return props;
};
