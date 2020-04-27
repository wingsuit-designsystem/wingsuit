var should = require("should");

var fs = require("fs");
var path = require("path");

var runLoader = require("./fakeModuleSystem");
var twigLoader = require("../");

var fixtures = path.join(__dirname, "fixtures");

describe("loader", function() {
  it("should add require statement to the twig library", function(done) {
    var template = path.join(fixtures, "loader", "template.html.twig");
    runLoader(twigLoader, path.join(fixtures, "loader"), template, fs.readFileSync(template, "utf-8"), function(err, result) {
      if(err) throw err;

      result.should.have.type("string");

      result.should.match(/require\(\"twig\"\)\.twig/);

      done();
    });
  });
});
