var fizzbuzz = require('../src/fizzbuzz');
var url = require('url')

function generate(request, response) {
  console.log('fizzbuzz replying');
  var fizzBuzzValue = getFizzBuzzValue(request);
  generateResponse(response, fizzBuzzValue);
}

function getFizzBuzzValue(request) {
  var pathname = url.parse(request.url).pathname;
  var parts = pathname.split('/');
  var input = parts[2];
  return fizzbuzz.fizzbuzznum(input);
}

function generateResponse(response, value) {
  response.writeHead(200);
  response.write(value);
  response.end();
}

exports.generate = generate

