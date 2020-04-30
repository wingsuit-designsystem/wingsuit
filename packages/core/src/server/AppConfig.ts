export default interface AppConfig {
  type: string;

  name: string;

  path: string;

  namespaces: Namespace;

  root: string;

  designSystem: string;

  cssMode: string
}

interface Namespace {
  [key: string]: string;
}
