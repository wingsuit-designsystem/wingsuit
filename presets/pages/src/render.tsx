import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { IPatternDefinition, renderer, storage } from '@wingsuit-designsystem/pattern';

export const renderAll = async (pagesContext, locales, callback) => {
  const pages: any = {};
  for (let index = 0; index < pagesContext.keys().length; index += 1) {
    try {
      const data = pagesContext(pagesContext.keys()[index]);
      pages[data.default.path] = data.default;
    } catch (e) {
      console.error(e);
    }
  }
  const results: any = [];
  Object.values(pages).forEach((page) => {
    results.push(render(page, locales));
  });
  Promise.all(results).then((values) => {
    const renderedPages: any = {};
    values.forEach((resultItemAry) => {
      const resultKey = Object.keys(resultItemAry)[0];
      const resultItem = resultItemAry[resultKey];
      renderedPages[resultKey] = resultItem;
    });
    callback(null, renderedPages);
  });
};
const render = async (ctx, locals) => {
  const result = {};
  try {
    const props = { page: '' };
    const vars = ctx.vars || {};
    const pattern: IPatternDefinition = ctx.pattern || null;
    storage.addGlobal('current_path', ctx.path);
    if (pattern) {
      storage.addDefinition(pattern.id, pattern);
      props.page = await renderer.renderPatternPreview(pattern.id, vars);
    } else if (ctx.template) {
      if (ctx.MDX != null) {
        vars.content = ReactDOMServer.renderToString(<ctx.MDX />);
      }
      props.page = await ctx.template({ ...vars });
    }
    const assets = Object.keys(locals.webpackStats.compilation.assets);
    const css = assets != null ? assets.filter((value) => value.match(/\.css$/)) : {};
    const js = assets != null ? assets.filter((value) => value.match(/\.js$/)) : {};
    const markup = ctx.html ? await ctx.html({ css, js, content: props.page }) : props.page;
    result[ctx.path] = markup;
  } catch (e) {
    if (e instanceof Error) {
      result[ctx.path] = e.message;
    } else {
      result[ctx.path] = e;
    }
  }
  return result;
};
