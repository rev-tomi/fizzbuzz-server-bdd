var assert = require('assert'),
  fizzbuzznum = require('../src/fizzbuzz.js').fizzbuzznum,
  fizzbuzz_general = require('../src/fizzbuzz.js').fizzbuzz_general;

//http://codingdojo.org/cgi-bin/wiki.pl?KataFizzBuzz
//mocha -u tdd test.fizzbuzz.js

suite('fizzbuzznum', function() {
  test('1 should return 1', function() {
    assert.equal('1', fizzbuzznum(1));
  });
  test('2 should return 2', function() {
    assert.equal('2', fizzbuzznum(2))
  });
  test('3 should return Fizz', function() {
    assert.equal('Fizz', fizzbuzznum(3))
  });
  test('5 should return Buzz', function() {
    assert.equal('Buzz', fizzbuzznum(5))
  });
  test('15 should return FizzBuzz', function() {
    assert.equal('FizzBuzz', fizzbuzznum(15));
  })
});

suite('fizzbuzz_general', function() {
  test('1-3 should be 1, 2, Fizz', function() {
    var lines = [];
    var printer = function(line) {lines.push(line);};
    fizzbuzz_general([1, 2, 3], printer);
    assert.deepEqual(['1', '2', 'Fizz'], lines);
  })
});

