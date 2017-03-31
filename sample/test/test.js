import assert from 'assert';

describe( 'String Test', function() {
  
  it( 'hello, world test', function() {
    assert.equal( 'hello, world', 'hello, world' );
    assert.notEqual( 'hello, world', 'world, hello' );
  }); 
});



import TestClass from '../src/TestClass';

describe( 'TestClass', () => {

	let test;

	before( () => {
		test = new TestClass();
	})

	it( 'add', () => {
		assert.equal( 5, test.add( 2, 3 ) );
		assert.equal( 15, test.add( 5 ) );
		assert.notEqual( 0, test.add(0) );
	})
})