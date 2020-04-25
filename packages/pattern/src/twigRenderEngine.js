"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var TwigAttribute_1 = require("./TwigAttribute");
var Pattern_1 = require("./Pattern");
var twigImpl = require('twig');
var twigNamespaces = {};
var globals = {};
twigImpl.cache();
var DefaultRenderer = /** @class */ (function () {
    function DefaultRenderer() {
    }
    DefaultRenderer.prototype.render = function (id, include, variables) {
        var baseTemplate = "{% include \"" + include + "\" %}";
        var template = twigImpl.twig({
            id: "template__" + id,
            data: baseTemplate,
            namespaces: twigNamespaces,
        }).render(variables);
        return template;
    };
    return DefaultRenderer;
}());
var rendererImpl = new DefaultRenderer();
function twigRenderPatternFunction(previewId, variantId, variables) {
    if (variables === void 0) { variables = {}; }
    var idAry = previewId.split('___');
    if (idAry.length < 2) {
        return renderPattern(previewId, variantId, variables);
    }
    var id = previewId.split('___')[1];
    var opts = Object.assign({}, {}, {
        ref: id,
        allowInlineIncludes: true,
        rethrow: true,
    });
    var template = twigImpl.twig(opts);
    if (template !== null) {
        return template.render();
    }
    else {
        return 'Unable to render template';
    }
}
function twigRenderPreviewPatternFunction(previewId, variantId, variables) {
    if (variables === void 0) { variables = {}; }
    var idAry = previewId.split('___');
    if (idAry.length < 2) {
        return renderPatternPreview(previewId, variantId, variables);
    }
    var id = idAry[1];
    var opts = Object.assign({}, {}, {
        ref: id,
        allowInlineIncludes: true,
        rethrow: true,
    });
    var template = twigImpl.twig(opts);
    if (template !== null) {
        return template.render();
    }
    else {
        return 'Unable to render template';
    }
}
function twigFunctions() {
    twigImpl.extendFunction('pattern_preview', twigRenderPreviewPatternFunction);
    twigImpl.extendFunction('pattern', twigRenderPatternFunction);
    twigImpl.extendFunction('attributes_object', twigAttributeFunction);
}
exports.twigFunctions = twigFunctions;
function twigAttributeFunction() {
    return new TwigAttribute_1.default();
}
function setTwig(twig) {
    twigImpl = twig;
}
exports.setTwig = setTwig;
function getTwig() {
    return twigImpl;
}
exports.getTwig = getTwig;
function setRenderer(renderer) {
    rendererImpl = renderer;
}
exports.setRenderer = setRenderer;
function setNamespaces(namespaces) {
    twigNamespaces = namespaces;
}
exports.setNamespaces = setNamespaces;
function addGlobal(name, value) {
    globals[name] = value;
}
exports.addGlobal = addGlobal;
function renderPatternPreview(patternId, variantId, variables) {
    if (variantId === void 0) { variantId = Pattern_1.default.DEFAULT_VARIANT_NAME; }
    if (variables === void 0) { variables = {}; }
    var variant = index_1.storage.loadVariant(patternId, variantId);
    if (variant == null) {
        throw new Error("Pattern " + patternId + ":" + variantId + " not found.");
    }
    var patternVariables = variant.getVariables();
    var values = [];
    Object.keys(variant.fields).forEach(function (key) {
        var field = variant.fields[key];
        if (field.type === 'pattern') {
            var preview = field.preview;
            var refPatternId = preview['id'];
            if (refPatternId == null) {
                throw new Error("Missing required attribute \"" + patternId + "." + variant.id + ".fields." + field.name + ":id\".");
            }
            var refVariantId = preview['variant'] != null ? preview['variant'] : Pattern_1.default.DEFAULT_VARIANT_NAME;
            var refSettings = preview['settings'];
            var refFields = preview['fields'];
            var mergedVariables = Object.assign(refSettings, refFields);
            values[key] = renderPatternPreview(refPatternId, refVariantId, mergedVariables);
        }
    });
    var mergedValues = Object.assign(patternVariables, variables, values);
    return renderPattern(patternId, variantId, mergedValues);
}
exports.renderPatternPreview = renderPatternPreview;
function renderPattern(patternId, variantId, variables) {
    if (variantId === void 0) { variantId = Pattern_1.default.DEFAULT_VARIANT_NAME; }
    if (variables === void 0) { variables = {}; }
    var variant = index_1.storage.loadVariant(patternId, variantId);
    if (variant == null) {
        throw new Error("Pattern \"" + patternId + ":" + variantId + "\" not found.");
    }
    var mergedValues = Object.assign({ 'wingsuit': globals }, variables);
    return rendererImpl.render(patternId + '__' + variant.id, variant.use, mergedValues);
}
exports.renderPattern = renderPattern;
function renderTemplate(path, variables) {
    if (variables === void 0) { variables = {}; }
    var mergedVariables = Object.assign(variables, { 'wingsuit': globals });
    return rendererImpl.render(path, path, mergedVariables);
}
exports.renderTemplate = renderTemplate;
