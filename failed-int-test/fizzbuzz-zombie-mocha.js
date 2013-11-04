var Browser = require('zombie');
var browser = new Browser();

console.log('Hello, world');

describe('FizzBuzz', function() {
  console.log('trallala');
  it('Dividible with 5 and 3 should return FizzBuzz', function (done) {
    browser.visit('http://localhost:8888/fizzbuzz/15', function() {
      console.log(browser.plainText);
      done();
    });
  });
});

