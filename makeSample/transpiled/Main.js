"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require( 'babel-polyfill' );

var Main = function () {
	function Main() {
		(0, _classCallCheck3.default)(this, Main);
	}

	(0, _createClass3.default)(Main, [{
		key: _iterator2.default,
		value: function value() {

			return (0, _getIterator3.default)([1, 2, 3]);
		}
	}, {
		key: "entries",
		value: _regenerator2.default.mark(function entries() {
			return _regenerator2.default.wrap(function entries$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.delegateYield([10, 20], "t0", 1);

						case 1:
						case "end":
							return _context.stop();
					}
				}
			}, entries, this);
		})
	}, {
		key: "restAndDefault",
		value: function restAndDefault() {
			var _console;

			var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

			for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				rest[_key - 1] = arguments[_key];
			}

			(_console = console).log.apply(_console, [a].concat(rest));
		}
	}, {
		key: "log",
		value: function log() {

			console.log(this.constructor.name);
		}
	}]);
	return Main;
}();

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

exports.default = Main;
var m = new Main();

var _m$entries = m.entries(),
    _m$entries2 = (0, _slicedToArray3.default)(_m$entries, 2),
    x = _m$entries2[0],
    y = _m$entries2[1];

console.log(x, y);

var _x$y = { x: 20, y: 30 };
x = _x$y.x;
y = _x$y.y;


console.log(x, y);