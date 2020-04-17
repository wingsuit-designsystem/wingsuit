class Pattern {
  constructor(content) {
    this.content = content;
  }
}
module.exports = function(content) {
  return new Pattern(content);
};