
const child_process = require( 'child_process' );
const spawn = child_process.spawn;

const spawnOption = {

	detached: true,
	stdio: [ 0, 'pipe', 'pipe' ]
};

const frame = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@';


/**
 * terminal 명령어를 실행한다. 
 * 1. Promise를 반환하여 비동기 처리를 할 수 있다. 
 * @param  {[type]} command [description]
 * @param  {[type]} opt     [description]
 * @return {[type]}         [description]
 */
function terminal( command, opt ){
	
	const a = command.split( ' ' ),
		cmd = a[0],
		args = a.slice(1);

	const child = spawn( cmd, args, opt || spawnOption );

	return new Promise( (resolve, reject) =>{

		child.stdout.on( 'data', data => console.log( "-", data.toString() ) );
		child.stderr.on( 'data', data => console.log( "x", data.toString() ) );

		child.on( 'close', code =>{

			if( code == 0 ) return resolve(code);

			return reject(code);
		})
	});
}



/**
 * log와 함께 command를 실행한다. 
 * @param  {[type]} message [description]
 * @param  {[type]} command [description]
 * @return {[type]}         [description]
 */
function exec( log, command ){

	alert( log );

	return terminal( command );
}

/**
 * 프로젝트 설정에 필요한 터미널 명령어 배열. 
 * 1. 로그 메세지, 터미널 명령어의 두 개가 한 쌍으로 이루어진다. 
 * @type {Array}
 */
const nodemodules = [
	// npm 초기화
	'Initialize NPM & Install Node Modules', 'npm init',
	
	// 'Install Babel-Core', 'npm install babel-core --save',
	// 'Install Babel-Cli', 'npm install babel-cli --save',
	// 'Install Babel-loader', 'npm install babel-loader --save',
	// 'Install Babel-Preset-Latest', 'npm install babel-preset-latest --save',
	// 'Install Babel-Plugin-Transform-Runtime', 'npm install babel-plugin-transform-runtime --save-dev',
	// 'Install Babel-Runtime', 'npm install babel-runtime --save',
	// 'Install Babel-polyfill', 'npm install babel-polyfill --save',
	
	// 'Install Webpack', 'npm install webpack --save',
	// 'Install Webpack-Dev-Server', 'npm install webpack-dev-server --save-dev'

	// 'Install Gulp', 'npm install gulp --save',
];

/**
 * npm 초기화 & es6 프로젝트에 필요한 패키지 설치. 
 * 1. nodemodules 배열안의 모든 명령어가 모두 실행될 때까지 자신을 호출한다. 
 * @return {[type]} [description]
 */
function installNodeModules( nodemodules ){

	return new Promise( (resolve, reject) =>{

		(function recursive(){
		
			if( nodemodules.length == 0 ) 
				return resolve( null );

			exec( nodemodules.shift(), nodemodules.shift() )
				.then( recursive )
				.catch( e => reject(e) );
		})();
	});
}

/**
 * gulp.js, webpack.config.js, babelrc등 프로젝트 설정에 필요한 파일들을 생성한다. 
 * @return {[type]} [description]
 */
function writeFiles( error ){

	console.log( '...writing files' );

	for( var k in templates ){

		console.log( k, templates[k] );
	}
}

/**
 * 실행. 
 */
installNodeModules( nodemodules )
	.then( writeFiles )
	.catch( e => console.warn(e) );


// exec( 'Initialize NPM', 'npm init' )
// 	.then( code => exec( 'Install Webpack', 'npm install webpack --save' ) )
// 	.then( code => exec( 'Install Gulp', 'npm install gulp --save' ) )
// 	.then( code => console.log( 'COMPLETE', code ) )
// 	.catch( code => console.log( 'ERROR', code ) );



const templates = {};

templates[ '.babelrc' ] = `
{
	'presets': [ 'latest' ],
	'plugins': [ 
		[ 'transform-runtime', {
			'helpers': true,
			'polyfill': true,
			'regenerator': true,
			'moduleName': 'babel-runtime'
		}]
	]
}`;

templates[ 'webpack.config.js' ] = `
const path = require( 'path' );

module.exports = {

	// The point or points to enter the application. 
	// At this point the application starts executing. 
	// If an array is passed all items will be executed.
	// https://webpack.js.org/configuration/entry-context/#entry
	entry: {
		index: './transpiled/Main.js',
	},

	// The top-level output key contains set of options instructing 
	// webpack on how and where it should output your bundles, 
	// assets and anything else you bundle or load with webpack.
	// https://webpack.js.org/configuration/output/
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'dist' )
	},

	// These options determine how the different types of modules 
	// within a project will be treated.
	// https://webpack.js.org/configuration/module/
	module: {

	},

	// These options change how modules are resolved. 
	// webpack provides reasonable defaults, 
	// but it is possible to change the resolving in detail. 
	// Have a look at Module Resolution for more explanation of how the resolver works.
	// https://webpack.js.org/configuration/resolve/
	resolve: {
		modules: [
			'node_modules',
		]
	}
} 

`


//------------------------------------------------------------
//
// Utils
//
//------------------------------------------------------------

function repeat( char, len ){

	var c = '';

	for( ; len-- ; ) c += char;

	return c;
}

function makeLine( text, char, len ){

	var s = repeat( ' ', len ).split( '' );

	s[0] = char;
	s[ s.length - 1 ] = char;

	text = text.slice( 0, len - 2 );

	var start = ( len - text.length ) / 2 | 0;

	for( var i = 0; i < text.length; i++ ){
		s[ start + i ] = text.charAt(i);
	}

	return s.join('');
}

function alert( message ){

	const char = frame.charAt(0),
		a = [ 
			frame,
			makeLine( ' ', char, frame.length ),
			makeLine( message, char, frame.length ),
			makeLine( ' ', char, frame.length ),
			frame,
		];

	console.log( a.join( '\n' ) );
}