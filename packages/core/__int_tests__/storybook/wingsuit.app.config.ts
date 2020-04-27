import * as path from "path";

export const name = "test";
export const type = "storybook";
export const root = "../";
export const namespaces = {
  'atoms': path.resolve(__dirname, '../source/atoms')
}