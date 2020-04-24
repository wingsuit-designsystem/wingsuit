var path = require("path");
var hashGenerator = require("hasha");
var _ = require("underscore");
var mapcache = require("./mapcache");
var wingsuitPattern = require('@wingsuit-designsystem/pattern');
module.exports = function (options) {
  return function (id, tokens, pathToTwig) {
    var includes = [];
    var resourcePath = mapcache.get(id);
    var processDependency = function (token) {
      if (options.twigOptions && options.twigOptions.namespaces) {
        var namespaces = options.twigOptions.namespaces;
        Object.keys(namespaces).forEach(ns => {
          var colon = new RegExp('^' + ns + '::');
          var atSign = new RegExp('^@' + ns);

          if (colon.test(token.value)) {
            token.value = token.value.replace(ns + '::', namespaces[ns]);
          } else if (atSign.test(token.value)) {
            token.value = token.value.replace('@' + ns, namespaces[ns]);
          }
        });
      }
      includes.push(token.value);
      token.value = hashGenerator(path.resolve(path.dirname(resourcePath), token.value));
    };

    var processToken = function (token) {

      if (token.type == "logic" && token.token.type) {
        switch (token.token.type) {
          case 'Twig.logic.type.block':
          case 'Twig.logic.type.if':
          case 'Twig.logic.type.elseif':
          case 'Twig.logic.type.else':
          case 'Twig.logic.type.for':
          case 'Twig.logic.type.spaceless':
          case 'Twig.logic.type.macro':
            _.each(token.token.output, processToken);
            break;
          case 'Twig.logic.type.extends':
          case 'Twig.logic.type.include':
            _.each(token.token.stack, processDependency);
            break;
          case 'Twig.logic.type.embed':
            _.each(token.token.output, processToken);
            _.each(token.token.stack, processDependency);
            break;
          case 'Twig.logic.type.import':
          case 'Twig.logic.type.from':
            if (token.token.expression != '_self') {
              _.each(token.token.stack, processDependency);
            }
            break;
        }
      }
      if (token.type == "output") {
        _.each(token.stack, processToken);
      }
      if (token.type == "Twig.expression.type._function" && token.fn) {
        switch (token.fn) {
          case 'pattern':
            const pattern = wingsuitPattern.storage.loadPattern(token.params[1].value);
            if (pattern != null) {
              const use = pattern.use;
              const valueToken = {'value': use};
              processDependency(valueToken);
              token.params[1].value += '___' + valueToken.value
            }
        }
      }
    };


    var parsedTokens = JSON.parse(tokens);

    _.each(parsedTokens, processToken);

    var opts = Object.assign({}, options.twigOptions, {
      id: id,
      data: parsedTokens,
      allowInlineIncludes: true,
      rethrow: true,
    });
    var output = [
      'var twig = require("' + pathToTwig + '").twig,',
      '    template = twig(' + JSON.stringify(opts) + ');\n',
      'module.exports = function(context) { return template.render(context); }'
    ];

    if (includes.length > 0) {
      _.each(_.uniq(includes), function (file) {
        output.unshift("require(" + JSON.stringify(file) + ");\n");
      });
    }

    return output.join('\n');
  };
};
