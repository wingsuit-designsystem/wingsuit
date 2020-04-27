var getOptions = require("loader-utils").getOptions;
var validateOptions = require("schema-utils");

var schema = {
    type: "object",
    properties: {
        twigOptions: {
            type: "object",
        },
    },
};

module.exports = function(loader) {
    var options = getOptions(loader);
    if (!options) {
        return {};
    }
    validateOptions(schema, options, "twig-loader");
    return options;
};
