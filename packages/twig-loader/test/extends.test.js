var should = require("should");

var fs = require("fs");
var path = require("path");

var runLoader = require("./fakeModuleSystem");
var twigLoader = require("../");

var fixtures = path.join(__dirname, "fixtures");

describe("extend", function() {
  it("should generate proper require statements", function(done) {
    var template = path.join(fixtures, "extend", "template.html.twig");
    runLoader(twigLoader, path.join(fixtures, "extend"), template, fs.readFileSync(template, "utf-8"), function(err, result) {
      if(err) throw err;

      result.should.have.type("string");

      // verify the generated module imports the `include`d templates
      result.should.match(/require\(\"a\.html\.twig\"\);/);

      done();
    });
  });
});
