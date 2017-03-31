/**
 * range
 * @param {[type]} a             [description]
 * @param {[type]} b             [description]
 * @yield {[type]} [description]
 */
export function* range(a, b) {
	for (let i = a; i < b; i++) yield a;
}

/**
 * fibonaci
 * @param {[type]} len           [description]
 * @yield {[type]} [description]
 */
export function* fibo(len) {
	let [a, b] = [0, 1];

	for (let i = len; i--;) {
		yield b;
		
		[a, b] = [b, a + b];
	}
}
