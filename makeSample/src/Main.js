// require( 'babel-polyfill' );

import Point from './geom/Point';
import { range, fibo } from './utils/range';

const templates = {};

templates['.babelrc'] = `{
	'presets': ['latest'],
	'plugins': [ 
		[ 'transform-runtime', {
			'helpers': true,
			'polyfill': true,
			'regenerator': true,
			'moduleName': 'babel-runtime'
		}]
	]
}`;

templates[ 'webpack.config.js' ] = `/**
 * webpack is fed via a configuration object. 
 * It is passed in one of two ways depending on how you are using webpack: through the terminal or via Node.js. 
 * All the available configuration options are specified below.
 * @ https://webpack.js.org/configuration/
 */

const path = require( 'path' );

module.exports = {

	// The point or points to enter the application. 
	// At this point the application starts executing. 
	// If an array is passed all items will be executed.
	// @ https://webpack.js.org/configuration/entry-context/#entry
	entry: {
		index: './src/Main.js',
	},

	// The top-level output key contains set of options instructing 
	// webpack on how and where it should output your bundles, 
	// assets and anything else you bundle or load with webpack.
	// @ https://webpack.js.org/configuration/output/
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'dist' )
	},

	// These options determine how the different types of modules 
	// within a project will be treated.
	// @ https://webpack.js.org/configuration/module/
	module: {

		// An array of Rules which are matched to requests when modules are created. 
		// These rules can modify how the module is created. 
		// They can apply loaders to the module, or modify the parser.
		// @ https://webpack.js.org/configuration/module/#module-rules 
		rules: [
			{
				// A RegExp Condition: It's tested with the input.
				test: /\.js$/,
				//  The Condition must match. The convention is the provide 
				//  a string or array of strings here, but it's not enforced.
				include: [
					path.resolve( __dirname, 'src' ),
				],
				//  The Condition must NOT match. The convention is the provide 
				//  a string or array of strings here, but it's not enforced.
				exclude: [
					path.resolve( __dirname, 'node_modules' ),
				],
				// A list of UseEntries which are applied to modules. 
				// Each entry specifies a loader to be used.
				// @ https://webpack.js.org/configuration/module/#rule-use
				use: [
					{
						loader: 'babel-loader'
					},
				]
			}
		]
	},

	// These options change how modules are resolved. 
	// webpack provides reasonable defaults, 
	// but it is possible to change the resolving in detail. 
	// Have a look at Module Resolution for more explanation of how the resolver works.
	// @ https://webpack.js.org/configuration/resolve/
	resolve: {
		modules: [
			'node_modules',
		]
	},

	// This option controls if and how Source Maps are generated.
	// @ https://webpack.js.org/configuration/devtool/
	devtool: 'source-map', // or 'eval' for development

	// webpack can compile for multiple environments or targets.
	// @ https://webpack.js.org/configuration/target/
	target: 'web',

	// This set of options is picked up by webpack-dev-server 
	// and can be used to change its behavior in various ways. 
	// @ https://webpack.js.org/configuration/dev-server/
	devServer: {
		contentBase: path.join( __dirname, 'dist' ), // boolean | string | array, static file location
		compress: true, // boolean | string | array, static file location
		port: 9009,
		// It is possible to configure advanced options for serving static files from contentBase.
		// @ http://expressjs.com/en/4x/api.html#express.static
		staticOptions: {
			redirect: true
		},
		// Control options related to watching the files.
		watchOptions: {
			poll: true
		}
	}
} 
`;

templates[ 'dist/index.html' ] = `<html>
<head>
	<title></title>
	<script type="text/javascript" src='index.bundle.js'></script>
</head>	
<body>
</body>
</html>
`;

templates[ 'src/index.js' ] = `
class Main(){
	
	constructor(){

	}

	run(){
		console.log( 'app running' );
	}
}
`;

export default class Main{

	constructor(){

	}

	[Symbol.iterator](){

		return [ 1, 2, 3 ][ Symbol.iterator ]();
	}

	*entries(){

		yield* [ 10, 20 ];
	}

	restAndDefault( a = 1, ...rest ){
		// custom console
		console.log( a, ...rest );
	}

	log(){

		console.log( this.constructor.name );
	}

	print(){
	}
}

new Main().print();

// const m = new Main();

// m.restAndDefault( undefined, 2,3,4,5 );

// let { x, y } = { x: 10, y: 20 };

// console.log( x, y );

// function* range(a, b){

// 	for( ; a < b; a++ ) yield a;
// }

// for( let n of range(1, 10) ) console.log( n );

// let [ ...a ] = m;

// console.log( a );

// console.log( Promise );

// function* range( a, b ){

// 	for( ; a < b ; a++ ) yield a;
// }

// for( let n of range( 1, 10 ) ) console.log( n );

// export { range };

// let m = new Main();

// let [ x, y ] = m.entries();

// console.log(x, y);

// ({ x, y } = {x: 20, y: 30 });

// console.log( x, y );

// const p = new Point( 3, 4 );

// let [ ...values ] = p.entries();

// console.log( values );

// p.scale(2);

// console.log( ...p );

// for( let n of fibo(10) ) console.log( `fibo ${n}` );

// for( let n of range(10,20) ) console.log( `range ${n}` );

// console.log( 'watch' );
// console.log( 'watch2' );

window.Main = Main;
window.Point = Point;
window.range = range;
window.fibo = fibo;


