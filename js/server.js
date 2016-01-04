var net = require( 'net' );

var server = net.createServer( userConnection );

function userConnection( socketReq ) {
  console.log( 'I feel a little tickle!\n' );
  socketReq.setEncoding( 'utf-8' );

  socketReq.on( 'data', function( buffer ) {
    console.log( 'socket DATA event, fire in the hole!\n' );
    var parsedBuffer = buffer.split( ' ' );

    console.log( parsedBuffer[1] );
  });


  socketReq.end("get outta here you!\n");
}

server.listen( { port: 8080 }, function() {
  address = server.address();
  console.log("someone is connected on", address);
});