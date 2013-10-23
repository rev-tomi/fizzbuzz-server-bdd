function route(pathname) {
  var parts = pathname.split('/');
  if (parts.length == 2 && parts[0] == 'fizzbuzz') {
    console.log('going to route to fizzbuzz(' + parts[1] + ")");
  } else {
    console.log('going to route to 404');
  }
  console.log("About to route a request for " +  pathname);
}

exports.route = route;

