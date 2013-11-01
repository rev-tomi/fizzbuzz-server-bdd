//run: phantomjs fizzbuzz-test.js

var page = require('webpage').create();

page.open('http://localhost:8888/fizzbuzz/15', function (status) {
    testEquals('FizzBuzz', page.plainText);
    phantom.exit();
});

function testEquals(expected, actual) {
  var success = expected === actual;
  if (success) console.log('Pass');
  else console.log("Failure: '" + expected + "' vs '" + actual + "'");
}

