const namespaces = require('../../source/default/namespaces');

const {TwingEnvironment, TwingLoaderFilesystem, TwingFunction, TwingFilter} = require("twing");
const loader = new TwingLoaderFilesystem();
const environment = new TwingEnvironment(
  loader
);
// for (let namespace in namespaces) {
//  loader.addPath(namespaces[namespace], namespace);
// }
// loader.addPath('./node_modules/@wingsuit-designsystem/tools/demo', 'ws-demo');

environment.addFunction(
  new TwingFunction("attributes_object", () => {
  })
);
environment.addFunction(
  new TwingFunction("pattern_option_set", () => {
  })
);
environment.addFunction(
  new TwingFunction("pattern", () => {
  })
);
environment.addFilter(
  new TwingFilter("t", (arg) => {
    return arg;
  })
);
module.exports = environment;
