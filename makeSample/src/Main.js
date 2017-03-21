// require( 'babel-polyfill' );

import Point from './geom/Point';
import { range, fibo } from './utils/range';

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

		console.log( a, ...rest );
	}

	log(){

		console.log( this.constructor.name );
	}
}

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

let m = new Main();

let [ x, y ] = m.entries();

console.log(x, y);

({ x, y } = {x: 20, y: 30 });

console.log( x, y );

const p = new Point( 3, 4 );

let [ ...values ] = p.entries();

console.log( values );

p.scale(2);

console.log( ...p );

for( let n of fibo(10) ) console.log( `fibo ${n}` );

for( let n of range(10,20) ) console.log( `range ${n}` );

console.log( 'watch' );
console.log( 'watch2' );

window.Main = Main;
window.Point = Point;
window.range = range;
window.fibo = fibo;
