// Identity loader
// raw-loader's source - just converts your file to a string with "module.exports=" appended
// This is basically the simplest real world loader.

module.exports = function(content) {
  this.cacheable && this.cacheable();
  this.value = content;
  return "module.exports = " + JSON.stringify(content);
}
module.exports.seperable = true;