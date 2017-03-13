var http = require( 'http' );
var server = http.createServer();

var textHead = { 
	'Content-Type': 'text/plain',
	'Access-Control-Allow-Origin': '*'
};

server.on( 'request', function( req, res ){

	var match = req.url.match( /[^\/]+/g ) || [];

	console.log( match );

	switch( match[0] ){

		case 'api':
			responseValid( res, match );
			break;

		default:
			responseInvalid( res, req.url );
	}
});

function responseValid( res, match ){

	var o = { success: true };

	switch( match[1] ){

		case 'id':
			o.url = '/api/oauth';
			break;

		case 'oauth':
			o.url = '/api/cdn';
			break;

		case 'cdn':
			o.url = '/api/url';
			break;

		case 'url':
			o.url = 'img/line.png';
			break;

		default:
			responseInvalid( res, match[1] );
			return;
	}

	res.writeHead( 200, textHead );
	res.write( JSON.stringify( o ) );
	res.end();
}


function responseInvalid( res, url ){

	res.writeHead( 200, textHead );
	res.write( JSON.stringify( { success: false, message: 'invalid request', requestURL: url } ) );
	res.end();
}


server.listen( 8080 );