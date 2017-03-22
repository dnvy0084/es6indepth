
export function* range(a, b){
	for( ;a < b; a++ ) yield a;
}

export const ANG = 180 / Math.PI;
export const RAD = Math.PI / 180;

export class Point{

	constructor( x = 0, y = 0 ){

		this.x = x;
		this.y = y;
	}
}

const n = 12;

// export default n;