#!/usr/bin/env node

var http = require('http'),
    ansi =  require('ansi'),
    cursor = ansi(process.stdout);


if (process.argv.length === 2) {
  return console.log('USAGE: npmsearch <query string>');
}

var query = process.argv.slice(2).join(' ');

var req = http.request({
  hostname: 'npmsearch.com',
  path: '/query?fl=name,description,homepage&rows=200&sort=rating+desc&q=' + escape(query)
}, function(res) {
  var body = '';
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    body+=chunk;
  });

  res.on('end', function() {
    try {
      var obj = JSON.parse(body);
      console.log('');

      obj.response && obj.response.docs.forEach(function(p) {
        cursor
          .red().write(p.name + '\n')
          .white().write(p.description + '\n')
          .grey().write(p.homepage + '\n\n')
      });
      cursor.reset();
    } catch (e) {
      throw e;
    }
  });
})

req.on('error', function(e) {
  throw e;
});
req.end('\n');
