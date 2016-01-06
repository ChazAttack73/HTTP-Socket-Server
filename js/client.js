var net = require( 'net' );
var path = require( 'path' );
var host = process.argv[2] || 'localhost';
var port = 8080;

var client = net.connect(port, host,
    function() { //'connect' listener
  console.log('connected to server!');
  client.write('GET /helium.html HTTP/1.1\n\n');
});
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function() {
  console.log('disconnected from server');
});