const environment = require('./dist/environment');
/**
const TwingFunction = require('twing').TwingFunction;
const functionName = new TwingFunction('functionName', function () {
  return new Promise((resolve) => {
    resolve('demo');
  });
});
environment.addFunction(functionName);
* */
module.exports = environment;
