var res404 = require('./404');
var fizzbuzz = require('./fizzbuzz-response');

function route(pathname, request, response) {
  var parts = pathname.split('/');
  console.log(parts);
  if (parts.length == 3 && parts[1] == 'fizzbuzz') {
    console.log('going to route to fizzbuzz(' + parts[2] + ")");
    fizzbuzz.generate(request, response);
  } else {
    res404.generate(request, response)
    console.log('going to route to 404');
  }
  console.log("About to route a request for " +  pathname);
}

exports.route = route;

