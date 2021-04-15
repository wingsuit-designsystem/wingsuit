import React from 'react';

export const getProps = async (ctx, renderer, renderToStaticMarkup) => {
  const props = {page: ''};
  props.page = await renderer.renderData(ctx.path, ctx.template.default, {
    // @ts-ignore
    content: renderToStaticMarkup(<ctx.MDX/>),
  });
  return props;
};
