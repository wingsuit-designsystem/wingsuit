import * as path from "path";

module.exports = {
  name: "test",
  type: "storybook",
  root: "../",
  namespaces: {
    'atoms': path.resolve(__dirname, '../source/atoms')
  }
}
