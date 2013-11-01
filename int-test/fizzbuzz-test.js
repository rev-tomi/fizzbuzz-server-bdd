var page = require('webpage').create();

page.open('http://localhost:8888/fizzbuzz/15', function (status) {
    console.log('status: ' + status);
    console.log('document: ' + page.plainText);
    phantom.exit();
});

