var net = require( 'net' );

var server = net.createServer(function (socket) {
  socket.end("get outta here you!\n");
});

server.listen( { port: 8080 }, function() {
  address = server.address();
  console.log("someone is connected on", address);
});