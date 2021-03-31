import React from 'react';
import 'protons';
import MDX from './overview.mdx';

export default {
  path: '/assets',
};

const template = require('../../docs.twig');

export const getProps = async (ctx, renderer, renderToStaticMarkup) => {
  const props = {};
  props.page = await renderer.renderData(ctx.path, template, {
    content: renderToStaticMarkup(<MDX />),
  });
};
