export interface Faker {
  token: string;
  property: string;
}
export interface Options {
  [key: string]: string;
}
export interface Preview {
  faker: Faker;
  fields: Preview;
  id: string;
}
export interface Properties {
  [key: string]: Property;
  fields: Property;
}
export interface Property {
  type: string;
  id: string;
  label: string;
  default_value: string;
  preview: string | Preview;
  required: boolean;
  multi_value_type: string;
  options: Options;
  fields: Property;
}
export interface Variants {
  [key: string]: Variant;
}
export interface Variant {
  label: string;
  fields: Property;
  settings: Property;
}
export interface IPatternDefinition {
  label: string;
  id: string;
  icon_path: string;
  namespace: string;
  parameters: any;
  use: string;
  visible: string;
  description: string;
  fields: Properties;
  settings: Properties;
  variants: Variants;
  extends: string[];
  configuration: any;
  dependencies: string[];
}
export interface IPatternDefinitionsPatterns {
  [key: string]: IPatternDefinition;
}
export interface IPatternDefinitions {
  patterns: IPatternDefinitionsPatterns;
}
