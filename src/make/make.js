
const child_process = require( 'child_process' );
const spawn = child_process.spawn;
const exec = child_process.exec;

const spawnOption = {

	detached: true,
	stdio: [ 0, 'pipe', 'pipe' ]
};

const frame = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@';


function terminal( command, opt ){
	
	const a = command.split( ' ' ),
		cmd = a[0],
		args = a.slice(1);
	
	const child = spawn( cmd, args, opt || spawnOption );

	return new Promise( (resolve, reject) =>{

		child.stdout.on( 'data', data =>{

			console.log( "-", data.toString() );
		});

		child.stderr.on( 'data', data =>{

			console.log( "x", data.toString() );
		});

		child.on( 'close', code =>{

			console.log( 'CLOSE', code );

			if( code == 0 ) return resolve(code);

			return reject(code);
		})
	});
}


function makeLine( text, char, len ){

	const a = text.split( '' );


}

function alert( message ){

	const char = frame.charAt(0),
		a = [ frame ];

	a.push( )
}

function exec( message, command ){

	alert( message );

	return terminal( command );
}



// terminal( 'npm init' )
// 	.then( code => exec( 'Install Webpack', 'npm install webpack --save' ) )
// 	.then( code => exec( 'Install Gulp', 'npm install gulp --save' ) )
// 	.then( code => console.log( 'COMPLETE', code ) )
// 	.catch( code => console.log( 'ERROR', code ) );
