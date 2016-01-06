var net = require( 'net' );
var fs = require( 'fs' );
var moment = require( 'moment-timezone' );
var reqDate = new Date();
//console.log( reqDate );

var server = net.createServer( userConnection );

function userConnection( socketReq ) {
  //console.log( 'I feel a little tickle!\n' );
  socketReq.setEncoding( 'utf-8' );

  socketReq.on( 'data', function( buffer ) {

    //console.log( 'socket DATA event, fire in the hole!\n' );
      //console.log(buffer);
    var parsedBuffer = buffer.split( ' ' );
    var reqURI = parsedBuffer[1];
      console.log(reqURI);
    if( reqURI === '/' ){
      reqURI = '/index.html';
    }
    var contentTypeFinder = reqURI.split( '.' );
      //console.log(typeof(contentTypeFinder), contentTypeFinder);
    var contentType = contentTypeFinder[1];
      console.log( reqURI);
      //console.log( contentType );
      //reqURI = '/helium.html';
    return fs.readFile( './html' + reqURI, function ( err, data ) {
      if (err) {
        console.log(err);
        return fs.readFile( 'html/404.html', function ( err, data ) {
          if( err ) console.log( err );
          socketReq.write( 'HTTP/1.1 404 TRY AGAIN SUCKAH!\n' );
          socketReq.write( 'Server : Chaz-Attack\n' );
          socketReq.write( 'Content-Type: text/html; charset=utf-8\n');
          socketReq.write( 'Date :' + reqDate );
          socketReq.write( '\n\n' );
          socketReq.write( ' ' );
          socketReq.write( data );
          return socketReq.end();
        });
      }
        socketReq.write( 'HTTP/1.1 200 OK MUTHA SNUKA!\n' );
        socketReq.write( 'Server : Chaz-Attack\n' );
        socketReq.write( 'Content-Type: text/' + contentType + '; charset=utf-8\n');
        socketReq.write( 'Date :' + reqDate );
        socketReq.write( '\n\n');
        socketReq.write( ' ');
        socketReq.write( data );
        return socketReq.end();
        });
      });
}
server.listen( { port: 8080 }, function() {
  address = server.address();
  console.log("someone is connected on", address);
});
