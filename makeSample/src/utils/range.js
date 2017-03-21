
export function* range(a, b){

	for( ;a < b; a++ ) yield a;
}

export function* fibo( len ){

	let [ a, b ] = [ 0, 1 ];

	for( ; len--; ){

		yield b;

		[ a, b ] = [ b, a + b ]; 
	}
}