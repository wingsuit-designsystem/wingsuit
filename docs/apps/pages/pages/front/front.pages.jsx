import React from 'react';
import 'protons';
import MDX from './front.mdx';

export default {
  path: '/',
};

const template = require('./front.twig');

export const getProps = async (ctx, renderer, renderToStaticMarkup) => {
  const props = {};
  props.page = await renderer.renderData(ctx.path, template.default, {
    content: renderToStaticMarkup(<MDX />),
  });
  return props;
};
