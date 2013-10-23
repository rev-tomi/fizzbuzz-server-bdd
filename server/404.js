function generate(request, response) {
  console.log('404 replying')
  response.writeHead(404);
  response.write('<html>');
  response.write('<head><title>Not found</title></head>');
  response.write('<body><h1>404 Not Found</h1></body>');
  response.write('</html>');
  response.end();
}

exports.generate = generate

