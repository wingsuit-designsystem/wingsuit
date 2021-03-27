import { RenderTwig } from '@wingsuit-designsystem/pattern-react/server';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import 'protons';
import 'highlight.js/styles/atom-one-dark.css';
import MDX from './images.mdx';

export default {
  path: '/assets/images',
};

const template = require('./images.twig');

const mdxData = ReactDOMServer.renderToStaticMarkup(<MDX />);

export const render = () => <RenderTwig data={template} content={mdxData}></RenderTwig>;
