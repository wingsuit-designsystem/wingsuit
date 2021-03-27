import { renderer, storage, TwingRenderer } from '@wingsuit-designsystem/pattern';
import { RenderTwig } from '@wingsuit-designsystem/pattern-react/server';

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
  twigRenderer.addFunction('file_url', url => {
    return Promise.resolve(url.replace('ws-assets://', '/'));
  });
  renderer.setRenderer(twigRenderer);

  const assets = Object.keys(locals.webpackStats.compilation.assets);
  const css = assets != null ? assets.filter(value => value.match(/\.css$/)) : {};
  const js = assets != null ? assets.filter(value => value.match(/\.js$/)) : {};

  const renderHtmlTwig = async variables => {
    const template = htmlTemplate.default;
    return renderer.renderData('html.twig', template, variables);
  };
  const renderTwig = (element, path) => {
    const template = element.props.data.default;
    const variables = element.props;
    storage.addGlobal('current_path', path);
    return renderer.renderData('main.twig', template, variables);
  };
  const resultPages = {};
  const renderAll = async () => {
    for (let index = 0; index < pagesContext.keys().length; index += 1) {
      let htmlRendered = '';
      try {
        const data = pagesContext(pagesContext.keys()[index]);
        try {
          const component: RenderTwig = data.render();
          // eslint-disable-next-line no-await-in-loop
          const rendered = await renderTwig(component, data.default.path);

          if (rendered != null) {
            // eslint-disable-next-line no-await-in-loop
            htmlRendered = await renderHtmlTwig({ content: rendered, css, js });
          }
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
