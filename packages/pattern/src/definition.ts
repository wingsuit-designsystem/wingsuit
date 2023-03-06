export interface Faker {
  token: string;
  property: string;
}
export interface OptionsConfiguration {
  configuration: any;
  label: string;
}
export interface Options {
  [key: string]: string;
}
export interface OptionsWithConfiguration {
  [key: string]: OptionsConfiguration;
}
export interface Preview {
  faker: Faker;
  fields: Preview;

  settings: Preview;
  id: string;
}
export interface Properties {
  [key: string]: Property;
}
export interface Property {
  type: string;
  id?: string;
  label: string;
  default_value?: string;
  description?: string;
  preview?: string | Preview;
  required?: boolean;
  multi_value_type?: string;
  options?: Options | OptionsWithConfiguration;
  fields?: Property;
}
export interface Variants {
  [key: string]: Variant;
}
export interface Variant {
  use?: string;
  label: string;
  fields?: Property;
  settings?: Property;
}
export interface IPatternDefinition {
  template?: any;
  label: string;
  id: string;
  icon_path?: string;
  namespace: string;
  parameters: any;
  use: string;
  visible: string;
  description: string;
  fields: Properties;
  settings?: Properties;
  variants?: Variants;
  extends?: string[];
  configuration: any;
  dependencies: string[];
}
export interface IPatternDefinitions {
  [key: string]: IPatternDefinition;
}
