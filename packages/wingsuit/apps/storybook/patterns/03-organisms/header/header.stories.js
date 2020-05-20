import {RenderTwig} from "@wingsuit-designsystem/storybook";
import React from "react";

export default { title: '03-organisms/header' };

const twigTemplate = require('./header.twig');

export const Header = () => <RenderTwig data={twigTemplate}></RenderTwig>;
