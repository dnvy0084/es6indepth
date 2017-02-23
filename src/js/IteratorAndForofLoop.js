console.log( 'Iterator와 for..of 반복문' );

let a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

console.log( '1. for(;;){} - 20 years ago' );

for( let i = 0; i < a.length; i++ ){
	console.log( a[i] );

	if( a[i] > 3 ) break;
}

console.log( '2. forEach( f ) - ES5' );

a.forEach( function( value ){

	console.log( value );

	if( value > 3 ) return;
});

a.every( function( n ){

	console.log( n );

	return n <= 3;
});

console.log( '3. for..of - ES6' );

for( let n of a ){
	console.log( n );

	if( n > 3 ) break;
}


console.log( 'etc. for..in - only for key-value pairs' );

a.isChanged = false;
a.key = 'some key';

let sum = 0;

for( let s in a ){

	console.log( a[s] );

	sum += a[s];
}

console.log( sum );

console.log( '4. for..of collection' );
console.log( '4-1. set' );

let set = new Set();

set.add( 1 );
set.add( 2 );
set.add( 3 );
set.add( 2 );

for( let n of set ){
	console.log( n );
}

console.log( '4-2. map' );

let map = new Map();

map.set( 'a', 1 );
map.set( 'b', 2 );
map.set( 'c', 3 );
map.set( 'b', 4 );

for( let [key, value] of map ){
	console.log( key, value );
}

for( let c of 'test' ){
	console.log( c );
}

console.log( '4-3. Object' );

let o = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// o[ Symbol.iterator ] = function* (){

// 	for( let key in o ){

// 		yield o[key];
// 	}
// }

o[ Symbol.iterator ] = function(){

	let props = [];

	for( let key in this ) props.push( key );
	
	return {

		next(){

			return { 
				done: props.length == 0, 
				value: o[ props.shift() ] 
			};
		}
	}
};

// for( let n of o ){
// 	console.log(n);
// }

let iter = o[ Symbol.iterator ](), 
	result = iter.next();

for( ; !result.done; result = iter.next() ){

	console.log( result.value );
}

