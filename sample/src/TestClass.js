
export default class TestClass {
	constructor() {

	}

	hello() {
		console.log( 'hello, world' );
	}

	add( a, b = 5 ) {
		return a + b;
	}
}