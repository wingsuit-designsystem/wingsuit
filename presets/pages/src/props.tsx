import React from 'react';
import { getStorage } from '@wingsuit-designsystem/pattern';

export const getProps = async (ctx, renderer, renderToStaticMarkup) => {
  const props = { page: '' };
  const vars = ctx.vars || {};
  const pattern = ctx.pattern || null;
  if (pattern != null) {
    getStorage().addDefinition('preset--page', pattern);
    props.page = await renderer.renderPatternPreview('preset--page', vars);
  } else {
    vars.content = renderToStaticMarkup(<ctx.MDX />);
    props.page = await renderer.renderData(ctx.path, ctx.template.default, vars);
  }

  return props;
};
