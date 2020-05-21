import {RenderTwig} from "@wingsuit-designsystem/storybook";
import React from "react";
import "organisms/header";

export default { title: '03-organisms/Header' };

const twigTemplate = require('./header.twig');

export const Header = () => <RenderTwig data={twigTemplate}></RenderTwig>;
