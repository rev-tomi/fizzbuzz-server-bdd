var page = require("webpage").create();

describe('FizzBuzz', function() {
  it('Dividible with 5 and 3 should return FizzBuzz', function (done) {
    page.open('http://localhost:8888/fizzbuzz/15', function(status) {
      page.plainText.should.equal('FizZBuzz');
      done();
    });
  });
});

