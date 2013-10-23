function route(pathname) {
  var parts = pathname.split('/');
  console.log(parts);
  if (parts.length == 3 && parts[1] == 'fizzbuzz') {
    console.log('going to route to fizzbuzz(' + parts[2] + ")");
  } else {
    console.log('going to route to 404');
  }
  console.log("About to route a request for " +  pathname);
}

exports.route = route;

