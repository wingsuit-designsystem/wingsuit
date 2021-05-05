import React from 'react';

export const getProps = async (ctx, renderer, renderToStaticMarkup) => {
    const props = {page: ''};
    const {vars} = ctx;
    vars.content = renderToStaticMarkup(<ctx.MDX/>);
    props.page = await renderer.renderData(ctx.path, ctx.template.default, vars);
    return props;
};
