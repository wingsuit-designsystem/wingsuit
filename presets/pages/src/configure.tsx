import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { renderer, storage, TwingRenderer } from '@wingsuit-designsystem/pattern';
import Page from './Page';
import { getProps } from './props';

export function configure(
  module: NodeModule,
  patternContext,
  dataContext,
  templateContext,
  pagesContext,
  namespaces,
  htmlTemplate,
  locals,
  callback
) {
  storage.setNamespaces(namespaces);

  storage.createDefinitionsFromMultiContext(patternContext);
  storage.createTwigStorageFromContext(templateContext);
  storage.createGlobalsFromContext(dataContext);
  const twigRenderer = new TwingRenderer();
  twigRenderer.addFunction('file_url', (url) => {
    return Promise.resolve(url.replace('ws-assets://', '/'));
  });
  renderer.setRenderer(twigRenderer);

  const assets = Object.keys(locals.webpackStats.compilation.assets);
  const css = assets != null ? assets.filter((value) => value.match(/\.css$/)) : {};
  const js = assets != null ? assets.filter((value) => value.match(/\.js$/)) : {};

  const renderHtmlTwig = async (variables) => {
    const template = htmlTemplate.default;
    return renderer.renderData('html.twig', template, variables);
  };
  const resultPages = {};
  const renderAll = async () => {
    for (let index = 0; index < pagesContext.keys().length; index += 1) {
      try {
        const data = pagesContext(pagesContext.keys()[index]);
        try {
          storage.addGlobal('current_path', data.default.path);
          const props =
            data.getProps != null
              ? // eslint-disable-next-line no-await-in-loop
                await data.getProps(data.default, renderer, ReactDOMServer.renderToStaticMarkup)
              : // eslint-disable-next-line no-await-in-loop
                await getProps(data.default, renderer, ReactDOMServer.renderToStaticMarkup);
          const rendered = ReactDOMServer.renderToStaticMarkup(<Page {...props} />);
          // eslint-disable-next-line no-await-in-loop
          const htmlRendered = await renderHtmlTwig({
            ...data?.default?.vars,
            content: rendered,
            css,
            js,
          });
          resultPages[data.default.path] = htmlRendered;
        } catch (e) {
          resultPages[data.default.path] = e.message;
        }
      } catch (e) {
        callback(null, {});
      }
    }
    callback(null, resultPages);
  };

  renderAll();
}
