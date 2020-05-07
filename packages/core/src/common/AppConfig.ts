export default interface AppConfig {
  type: string;

  name: string;

  path: string;

  namespaces: Namespace;

  root: string;

  designSystem: string;

  cssMode: string

}

export interface Namespace {
  [key: string]: string;
}
