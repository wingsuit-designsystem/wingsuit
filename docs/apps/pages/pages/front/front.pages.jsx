import { RenderTwig } from '@wingsuit-designsystem/pattern-react/server';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import 'protons';
import MDX from './front.mdx';

export default {
  title: 'Pages/Article',
  path: '/',
};

const template = require('./front.twig');

const mdxData = ReactDOMServer.renderToStaticMarkup(<MDX />);

export const render = () => <RenderTwig data={template} content={mdxData}></RenderTwig>;
