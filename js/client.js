var net = require( 'net' );
var path = require( 'path' );

var HOST = process.argv[2] || 'localhost';
var PORT = 80;

var client = net.connect(PORT, HOST,
    function() { //'connect' listener
  console.log('connected to server!');
  client.write('GET /index.html HTTP/1.1\n\n');
});
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function() {
  console.log('disconnected from server');
});