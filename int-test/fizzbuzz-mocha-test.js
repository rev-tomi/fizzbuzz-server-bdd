//run with mocha-phantomjs

var page = require("webpage").create();
//var page = new WebPage();

console.log('before describe');

describe('FizzBuzz', function() {
  //var page = require('webpage').create();
  //var page = new WebPage();
  console.log('trallala');
  it('Dividible with 5 and 3 should return FizzBuzz', function (done) {
    page.open('http://localhost:8888/fizzbuzz/15', function(status) {
      page.plainText.should.equal('FizZBuzz');
      done();
    });
  });
});
