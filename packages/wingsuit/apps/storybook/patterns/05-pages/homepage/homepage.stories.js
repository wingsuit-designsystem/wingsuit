import {RenderTwig} from "@wingsuit-designsystem/storybook";
import React from "react";

export default { title: '05-pages/homepage' };

const template = require('./homepage.twig');

export const Homepage = () => <RenderTwig data={template}></RenderTwig>;
