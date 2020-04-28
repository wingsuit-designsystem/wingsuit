import Wingsuit from "./Wingsuit";

export { default as Wingsuit } from './Wingsuit';
export { default as StorybookApp } from './StorybookApp';
export { default as AppConfig } from './AppConfig';
export { default as RootConfig } from './RootConfig';

const wingsuit = new Wingsuit();

export function getAppPack(environment:string, module: NodeModule, options: {} = {}) {
  console.log('ASDF');
  console.log(options);
  return wingsuit.generateWebpack(environment, module, options);
}