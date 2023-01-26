"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.async-iterator.js");
require("core-js/modules/es.symbol.to-string-tag.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPatternConfiguration = getPatternConfiguration;
exports.getRenderer = getRenderer;
exports.renderData = renderData;
exports.renderPattern = renderPattern;
exports.renderPatternPreview = renderPatternPreview;
exports.renderTemplate = renderTemplate;
exports.setRenderer = setRenderer;
exports.twingMapToArray = twingMapToArray;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.number.parse-int.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.array.concat.js");
var _Pattern = _interopRequireDefault(require("./Pattern"));
var _index = require("./index");
var _Field = require("./Field");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var rendererImpl;
function setRenderer(renderer) {
  rendererImpl = renderer;
}
function getRenderer() {
  return rendererImpl;
}
function getPatternConfiguration(_x) {
  return _getPatternConfiguration.apply(this, arguments);
}
function _getPatternConfiguration() {
  _getPatternConfiguration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(patternId) {
    var variantId,
      configuration,
      variant,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          variantId = _args.length > 1 && _args[1] !== undefined ? _args[1] : _Pattern["default"].DEFAULT_VARIANT_NAME;
          configuration = _args.length > 2 ? _args[2] : undefined;
          _context.prev = 2;
          variant = _index.storage.loadVariant(patternId, variantId);
          return _context.abrupt("return", new Promise(function (resolve) {
            var config = variant.getConfiguration();
            resolve(config[configuration]);
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](2);
          return _context.abrupt("return", new Promise(function (resolve) {
            if (_context.t0 instanceof Error) {
              // eslint-disable-next-line no-console
              console.info("Cannot load pattern configuration. Message: ".concat(_context.t0.message));
            }
            resolve('');
          }));
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 7]]);
  }));
  return _getPatternConfiguration.apply(this, arguments);
}
function twingMapToArray(variables) {
  var ary = [];
  if (variables instanceof Map) {
    variables.forEach(function (value) {
      ary.push(value);
    });
  }
  return ary;
}
function renderPatternPreview(_x2) {
  return _renderPatternPreview.apply(this, arguments);
}
function _renderPatternPreview() {
  _renderPatternPreview = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(patternId) {
    var variables,
      variantId,
      renderInfoContext,
      variant,
      renderInfo,
      promisedPreview,
      promisedPreviewNames,
      i,
      patternVariables,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          variables = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          variantId = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : _Pattern["default"].DEFAULT_VARIANT_NAME;
          renderInfoContext = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
          _context2.prev = 3;
          variant = _index.storage.loadVariant(patternId, variantId);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](3);
          return _context2.abrupt("return", new Promise(function (resolve) {
            if (_context2.t0 instanceof Error) {
              resolve(_context2.t0.message);
            }
          }));
        case 10:
          renderInfo = Object.assign({}, variant.getRenderInfo(), renderInfoContext);
          promisedPreview = [];
          promisedPreviewNames = [];
          i = 0;
          Object.keys(renderInfo).forEach(function (key) {
            var _renderInfo$key;
            promisedPreview[i] = renderPatternPreview(renderInfo[key].patternId, renderInfo[key].variables, renderInfo[key].variant, ((_renderInfo$key = renderInfo[key]) === null || _renderInfo$key === void 0 ? void 0 : _renderInfo$key.children) || {});
            promisedPreviewNames[i] = key;
            i += 1;
          });
          patternVariables = variant.getVariables();
          if (!(Object.keys(promisedPreview).length !== 0)) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", new Promise(function (resolve) {
            Promise.all(promisedPreview).then(function (promisedPreviewValues) {
              var previewRenderedVariables = {};
              for (var j = 0; j < promisedPreviewValues.length; j += 1) {
                var nameKeys = promisedPreviewNames[j].split('--');
                // Handling multi value fields.
                // Multi value patterns uses key--i as field name.
                if (nameKeys.length === 1) {
                  previewRenderedVariables[nameKeys[0]] = promisedPreviewValues[j];
                } else {
                  var fieldName = nameKeys[0];
                  var delta = Number.parseInt(nameKeys[1], 10);
                  if (variant.getField(fieldName).multiValueType() === _Field.MultiValueTypes.items) {
                    if (previewRenderedVariables[nameKeys[0]] === undefined) {
                      previewRenderedVariables[nameKeys[0]] = [];
                    }
                    previewRenderedVariables[nameKeys[0]][delta] = promisedPreviewValues[j];
                  } else if (variant.getField(fieldName).multiValueType() === _Field.MultiValueTypes.field_items) {
                    if (previewRenderedVariables[nameKeys[0]] === undefined) {
                      previewRenderedVariables[nameKeys[0]] = [];
                    }
                    previewRenderedVariables[nameKeys[0]][delta] = {
                      content: promisedPreviewValues[j]
                    };
                  } else if (variant.getField(fieldName).multiValueType() === _Field.MultiValueTypes.single_value) {
                    if (previewRenderedVariables[nameKeys[0]] === undefined) {
                      previewRenderedVariables[nameKeys[0]] = promisedPreviewValues[j];
                    } else {
                      previewRenderedVariables[nameKeys[0]] += promisedPreviewValues[j];
                    }
                  } else {
                    previewRenderedVariables[nameKeys[0]] = "No multi value type for field: '".concat(variant.getPattern().getId(), ":").concat(fieldName, ":").concat(variant.getField(fieldName).multiValueType(), "'");
                  }
                }
              }
              var finalVariables = Object.assign({}, patternVariables, buildBaseVariables(variables));
              Object.keys(previewRenderedVariables).forEach(function (key) {
                // Overwrite variables with rendered ones.
                if (finalVariables[key] !== null) {
                  finalVariables[key] = previewRenderedVariables[key];
                }
              });
              renderPattern(patternId, finalVariables, variantId).then(function (output) {
                resolve(output);
              })["catch"](function (error) {
                resolve(error);
              });
            });
          }));
        case 18:
          return _context2.abrupt("return", renderPattern(patternId, Object.assign({}, patternVariables, buildBaseVariables(variables, true)), variantId));
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 7]]);
  }));
  return _renderPatternPreview.apply(this, arguments);
}
function buildBaseVariables(variables) {
  var addGlobals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var passedVariables = variables;
  // Variables are passed as Map in Twing.
  if (variables instanceof Map) {
    var obj = {};
    variables.forEach(function (value, key) {
      obj[key] = value;
    });
    passedVariables = obj;
  }
  if (addGlobals) {
    return Object.assign({}, _index.storage.getGlobals(), passedVariables);
  }
  return passedVariables;
}
function renderPattern(_x3) {
  return _renderPattern.apply(this, arguments);
}
function _renderPattern() {
  _renderPattern = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(patternId) {
    var variables,
      variantId,
      variant,
      patternVariables,
      finalVariables,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          variables = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          variantId = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : _Pattern["default"].DEFAULT_VARIANT_NAME;
          variant = _index.storage.loadVariant(patternId, variantId);
          patternVariables = variant.getVariables(false);
          finalVariables = Object.assign({}, patternVariables, buildBaseVariables(variables, true));
          finalVariables.variant = variantId;
          variant.setRenderArgs(finalVariables);
          return _context3.abrupt("return", rendererImpl.render("".concat(patternId, "__").concat(variant.getVariant()), variant.getUse(), finalVariables));
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _renderPattern.apply(this, arguments);
}
function renderData(path, template) {
  var variables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return renderTemplate(path, variables);
}
function renderTemplate(path) {
  var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var finalVariables = Object.assign({}, _index.storage.getGlobals(), variables);
  return rendererImpl.render(path, path, finalVariables);
}