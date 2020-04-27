var Twig = require("twig");
var path = require("path");
var hashGenerator = require("hasha");
var mapcache = require("./mapcache");
var compilerFactory = require("./compiler");
var getOptions = require("./getOptions");
var r = require("@wingsuit-designsystem/pattern");

Twig.cache(false);

module.exports = function(source) {
    var path = require.resolve(this.resource),
        id = hashGenerator(path),
        options = getOptions(this),
        tpl;


    Twig.extend(function(Twig) {
        var compiler = Twig.compiler;
        compiler.module['webpack'] = compilerFactory(options);
    });

    mapcache.set(id, path)

    this.cacheable && this.cacheable();

    tpl = Twig.twig({
        id: id,
        path: path,
        data: source,
        allowInlineIncludes: true
    });

    tpl = tpl.compile({
        module: 'webpack',
        twig: 'twig'
    });

    this.callback(null, tpl);
};
