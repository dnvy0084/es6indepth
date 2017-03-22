/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.write('project intialized at ' + navigator.userAgent);

var templates = ['.babelrc', '{\n\t\'presets\': [ \'latest\' ],\n\t\'plugins\': [ \n\t\t[ \'transform-runtime\', {\n\t\t\t\'helpers\': true,\n\t\t\t\'polyfill\': true,\n\t\t\t\'regenerator\': true,\n\t\t\t\'moduleName\': \'babel-runtime\'\n\t\t}]\n\t]\n}', 'webpack.config.js', '/**\n * webpack is fed via a configuration object. \n * It is passed in one of two ways depending on how you are using webpack: through the terminal or via Node.js. \n * All the available configuration options are specified below.\n * @ https://webpack.js.org/configuration/\n */\n\nconst path = require( \'path\' );\n\nmodule.exports = {\n\n\t// The point or points to enter the application. \n\t// At this point the application starts executing. \n\t// If an array is passed all items will be executed.\n\t// @ https://webpack.js.org/configuration/entry-context/#entry\n\tentry: {\n\t\tindex: \'./src/index.js\',\n\t},\n\n\t// The top-level output key contains set of options instructing \n\t// webpack on how and where it should output your bundles, \n\t// assets and anything else you bundle or load with webpack.\n\t// @ https://webpack.js.org/configuration/output/\n\toutput: {\n\t\tfilename: \'[name].bundle.js\',\n\t\tpath: path.resolve( __dirname, \'dist\' )\n\t},\n\n\t// These options determine how the different types of modules \n\t// within a project will be treated.\n\t// @ https://webpack.js.org/configuration/module/\n\tmodule: {\n\n\t\t// An array of Rules which are matched to requests when modules are created. \n\t\t// These rules can modify how the module is created. \n\t\t// They can apply loaders to the module, or modify the parser.\n\t\t// @ https://webpack.js.org/configuration/module/#module-rules \n\t\trules: [\n\t\t\t{\n\t\t\t\t// A RegExp Condition: It\'s tested with the input.\n\t\t\t\ttest: /.js$/,\n\t\t\t\t//  The Condition must match. The convention is the provide \n\t\t\t\t//  a string or array of strings here, but it\'s not enforced.\n\t\t\t\tinclude: [\n\t\t\t\t\tpath.resolve( __dirname, \'src\' ),\n\t\t\t\t],\n\t\t\t\t//  The Condition must NOT match. The convention is the provide \n\t\t\t\t//  a string or array of strings here, but it\'s not enforced.\n\t\t\t\texclude: [\n\t\t\t\t\tpath.resolve( __dirname, \'node_modules\' ),\n\t\t\t\t],\n\t\t\t\t// A list of UseEntries which are applied to modules. \n\t\t\t\t// Each entry specifies a loader to be used.\n\t\t\t\t// @ https://webpack.js.org/configuration/module/#rule-use\n\t\t\t\tuse: [\n\t\t\t\t\t{\n\t\t\t\t\t\tloader: \'babel-loader\'\n\t\t\t\t\t},\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t},\n\n\t// These options change how modules are resolved. \n\t// webpack provides reasonable defaults, \n\t// but it is possible to change the resolving in detail. \n\t// Have a look at Module Resolution for more explanation of how the resolver works.\n\t// @ https://webpack.js.org/configuration/resolve/\n\tresolve: {\n\t\tmodules: [\n\t\t\t\'node_modules\',\n\t\t]\n\t},\n\n\t// This option controls if and how Source Maps are generated.\n\t// @ https://webpack.js.org/configuration/devtool/\n\tdevtool: \'source-map\', // or \'eval\' for development\n\n\t// webpack can compile for multiple environments or targets.\n\t// @ https://webpack.js.org/configuration/target/\n\ttarget: \'web\',\n\n\t// This set of options is picked up by webpack-dev-server \n\t// and can be used to change its behavior in various ways. \n\t// @ https://webpack.js.org/configuration/dev-server/\n\tdevServer: {\n\t\tcontentBase: path.join( __dirname, \'dist\' ), // boolean | string | array, static file location\n\t\tcompress: true, // boolean | string | array, static file location\n\t\tport: 9009,\n\t\t// It is possible to configure advanced options for serving static files from contentBase.\n\t\t// @ http://expressjs.com/en/4x/api.html#express.static\n\t\tstaticOptions: {\n\t\t\tredirect: true\n\t\t},\n\t\t// Control options related to watching the files.\n\t\twatchOptions: {\n\t\t\tpoll: true\n\t\t}\n\t}\n} \n', 'dist/index.html', '<html>\n<head>\n\t<title></title>\n\t<script type="text/javascript" src=\'index.bundle.js\'></script>\n</head>\t\n<body>\n</body>\n</html>', 'src/index.js', 'document.write( `project intialized at ' + navigator.userAgent + '` )'];

/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map