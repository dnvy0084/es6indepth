
const values = Symbol( 'values' );

export default class Point{

	constructor( x = 0, y = 0 ){

		this[ values ] = new Float32Array( 2 );

		this.x = x;
		this.y = y;
	}

	*[Symbol.iterator](){
		yield* [ this.x, this.y ];
	}

	*entries(){
		yield* [ ['x', this.x], ['y', this.y] ];
	}

	scale( value ){

		this.x *= value;
		this.y *= value;
	}

	get x(){
		return this[ values ][0];
	}
	
	set x(value){
		this[ values ][0] = value;
	}

	get y(){
		return this[ values ][1];
	}
	
	set y(value){
		this[values][1] = value;
	}
}