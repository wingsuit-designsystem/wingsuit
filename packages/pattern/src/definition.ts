export interface Faker {
  token: string;
  property: string;
}
export interface Preview {
  faker: Faker;
}
export interface Properties {
  [key: string]: Property;
}
export interface Property {
  type: string;
  id: string;
  label: string;
  default_value: string;
  preview: string | Preview;
  required: boolean;
  multi_value_type: string;
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
  namespace: string;
  parameters: any;
  use: string;
  visible: string;
  description: string;
  fields: Properties;
  settings: Properties;
  variants: Variants;
}
export interface IPatternDefinitionsPatterns {
  [key: string]: IPatternDefinition;
}
export interface IPatternDefinitions {
  patterns: IPatternDefinitionsPatterns;
}
