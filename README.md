ES6 in Depth
====


[let, const](http://hacks.mozilla.or.kr/2016/03/es6-in-depth-let-and-const/)
----
##### var의 문제점. 
* 블럭이 Scope를 결정하지 않는다. 
* 루프안의 변수가 과도하게 공유된다. 

##### let
* 새로운 변수 선언 키워드이다. 
* 블럭을 기준으로 스코프를 결정한다.
* 글로벌 let 변수는 글로벌 객체의 속성이 아니다. 
* for(let i... ) 형태의 루프는 반복할 때마다 변수 i를 새로 바인딩한다. 
* let 변수는 선언 전에 참조하면 에러를 발생한다. 
* let 변수는 중복 선언시 Syntax 에러를 발생한다. 

> 변수 호이스팅으로 인한 문제 

        /**
         * var 로 선언한 변수는 전역이나 선언된 함수 scope의 최상단으로 끌어올려(hoist) 집니다. 
         * @return {[type]} [description]
         */
        function hoistingProblem(){
    
            let t = 'test';
    
            setTimeout( function(){
    
                console.log( t ); // 'test'
    
                let a = 'a';
    
                if( true ){
    
                    let t = 'complete'; 
    
                    console.log( a ); // a
                }
    
                console.log( t ); // 'test'
                
            }, 1000 )
        }

> loop안에서 하나로 바인딩 된 index 문제. 

        /**
         * var로 선언한 i는 for loop가 종료되는 시점의 값으로 참조되어 
         * 아래와 같은 code 실행시 undefined가 출력된다. 
         * @return {[type]} [description]
         */
        function loopIndexProblem(){
    
            let messages = [ 'Hi', 'This is', 'console!' ];
    
            for( let i = 0; i < messages.length; i++ ){
    
                setTimeout( function(){
    
                    console.log( messages[i] );
    
                }, i * 300 );
            }
        }

##### const

* 상수 선언 키워드이다. 
* let과 동일하게 블록 스코프를 가진다. 
* 선언과 동시에 할당을 해야한다. 
* const 상수에 값을 할당하면 에러이다. 
* 값을 할당하지 않는 const 선언은 에러이다. 

        const NUM = 'test'; // 'test';
    
        NUM = 'complete'; // Error: Assignment to constant variable.
        NUM += 'ing'; // Error: Assignment to constant variable.
    
        const EMPTY; // SyntaxError: Missing initializer in const declaration

[Rest and Default Prameter](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-rest-parameters-and-defaults/)
----

##### 레스트 파라미터

* 인자의 개수가 가변적인 함수를 variadic function이라고 한다. 
* ES6부터 `function( ...rest ){}` 형태의 가변인자를 지원하는 문법이 추가되었다. 

         /**
         * 고전 스타일로 arguments를 이용하는 형식. 
         * @param  {[type]} collection [description]
         * @return {[type]}            [description]
         */
        function containsAll( collection ){
     
            for( var i = 1; i < arguments.length; i++ ){
                
                if( collection.indexOf( arguments[i] ) == -1 ) return false;
            }
    
            return true;
        }
    
        /**
         * rest parameter와 for..of loop를 이용하여 작성. 
         * @param  {[type]}    collection [description]
         * @param  {...[type]} elements   [description]
         * @return {[type]}               [description]
         */
        function containsAll2( collection, ...elements ){
            
            for( let e of collection ){
    
                if( collection.indexOf( e ) == -1 ) return false;
            }
    
            return true;
        }

##### 디폴트 파라미터

* ES5까지 함수 인자의 default 값은 undefined 였다.
* ES6부터 함수 인자의 기본값을 지정할 수 있다. `function( a = 'a', b = 'b' ){}의 형태로 표기`
* 디폴트 값은 함수 호출 시 계산되며, 왼쪽에서 오른쪽의 순서를 가진다.

        calcDefaultValue( 1 ) // 1, 2;
        calcDefaultValue( 2 ) // 2, 3;

        function calcDefaultValue( a = 1, b = a == 1 ? 2 : 3 ){

            console.log( a, b );
        }

* 디퐅트 인자 뒤에 기본값이 없는 인자가 올 수 있으며 그럴경우 뒤 인자의 기본값은 undefined이다. 
        
        function defaultparam( a = 1, b ){ ... } // 아래와 같다. 
        function defaultparam( a = 1, b = undefined ){ ... } 

[Template String](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-template-strings-2/)
----

##### 백틱(Backtick) 문자열

* 템플릿 스트링은 `` ` `` 문자로 감싼 문자열이다. 

        let templateString = `this is template string.`;

* 일반 문자열과 똑같이 `+`로 concat 가능하며 일반 문자열과 템플릿 스트링 간의 concat도 가능하다. 

        templateString += `another templateString` + "normal string";

* `${}`을 통해 문자열을 채워넣을 수 있다. `${}`을 템플릿 대입문이라 하며 javascript의 모든 구문이 허용된다. 
* 템플릿 문자열에서 백틱문자를 `` ` `` 사용해야 할 경우 역슬래시로 `` \` `` 이스케이프 할 수 있다. 
* 템플릿 문자열에서 템플릿 대입문의 문자열을 사용할 경우에도 역슬래시로 이스케이프 (`\${` 혹은 `$\{`)가능하다. 

        let name = 'kim.jinhonn',
            age = 30;

        let t = `I\`m ${name}. and I\`m ${age} years old.`;

        console.log( t ); // I`m kim.jinhonn. and I`m 30 years old.

* 일반적인 문자열과 다르게 화이트 스페이스를 그대로 표현한다. 
        
        let paragraph = `
          <h1>Title</h1>
          <p>Unauthorized hockeying can result in penalties
          of up to ${30} minutes.</p>
        `;

##### Tagged Template

* tagged template은 template 문자열 앞에 tag를 붙여서 사용한다. 
* tag에 저장된 함수를 호출한다. tag는 변수나 객체의 속성 함수 호출의 결과일 수도 있다. 
* 대입문을 경계로 split된 배열과 대입문의 값을 ...rest 가변인자로 받는다. 

        let name = 'Kim Jin Hoon';
    
        /**
         * 언어별 문자열을 저장하고 있는 객체. 
         * @type {Object}
         */
        const words = {

            'hi' : [ '안녕 {0}', 'Hi {0}', '{0} صباح الخير.', 'Guten Morgen.  {0}' ],
            'bye': [ '잘가 {0}', 'Bye {0}', 'وداعا. {0}', 'Bye. {0}' ],
            'stop': [ '고만!', 'Stop!', 'توقف', 'Stopp' ]
        };

        /**
         * i18n 함수를 초기화 하는 함수. 
         * 1. 클로져로 구현하여 countryCode와 words에 대한 접근을 제한한다. 
         * @param  {[type]} countryCode [description]
         * @param  {[type]} words       [description]
         * @return {[type]}             [description]
         */
        function initializeI18n( countryCode, words ){

            return function( template, ...rest ){

                let key = template[0].replace( /\s+/g, '' );

                if( !words.hasOwnProperty( key ) )
                    throw new Error( 'Error' );

                let string = words[ key ][ countryCode ];

                return string.replace( /\{[0-9]+\}/g, c => rest[ c.match( /\d+/g )[0] ] );
            }
        }

        const i18n = initializeI18n( 1, words );
    
        console.log( i18n`hi ${name}` ); // Hi Kim Jin Hoon
        console.log( i18n`bye ${name}` ); // Bye Kim Jin Hoon 
        console.log( i18n`stop` ); // Stop!

        console.log( initializeI18n( 3, words )`stop` ); // Stopp

* tag 함수에서 template 인자의 raw 배열을 통해 입력된 문자가 escape 되기 전 문자열에 접근할 수 있다. 
    
        /**
         * template의 문자열 길이와 template.raw의 문자열 길이 비교 테스트
         * @param  {[type]}    template [description]
         * @param  {...[type]} rest     [description]
         * @return {[type]}             [description]
         */
        function rawTest( template, ...rest ){

            template.forEach( 
                (s, i, _) => log( '_(_), _(_)', s, s.length, template.raw[i], template.raw[i].length ) 
            );
        }

* String.raw는 ES6에 내부적으로 구현된 유일한 tag이다. 
* template의 raw 속성과 같이 escape 되기 전 string으로 반환한다. 

        String.raw `\n\t`.length; // 4

[Arrow Functions](http://hacks.mozilla.or.kr/2015/09/es6-in-depth-arrow-functions/)
----
##### javascript의 함수

* ES5 버전까지 javascript에서 함수 선언을 위해 function 키워드가 필요하다. 

        // function declaration
        function f( a, b ){
            return a + b;
        }

        // function expression
        var f = function( a, b ){
            return a + b;
        }

        // function constructor
        var f = new Function( 'a', 'b', 'a + b' );

* function constructor를 이용하는 방식은 function expression과 동일하다고 볼 수 있다. 
* function declaration은 javascript의 호이스팅에 의해 선언전에 사용할 수 있다. 
* function expression은 f라는 변수가 선언은 되지만 할당되지 않은 상태이기에 할당 전에 호출 할 수 없다. 
        
        sum( 1, 2 ); // 3
        add( 1, 2 ); // 에러

        function sum( a, b ){
            return a + b;
        }

        var add = function( a, b ){
            return a + b;
        }

##### 람다함수

* 1930년대 알론조 처치가 고안한 수학 모델 [람다대수](https://ko.wikipedia.org/wiki/%EB%9E%8C%EB%8B%A4_%EB%8C%80%EC%88%98)에서 유래했다. 
* 프로그램 언어에서 람다 함수는 함수의 축약 표현식이라고 볼 수 있다. 
* 함수를 일급객체로 사용하는 언어가 늘어나면서 최근에는 람다 함수가 트랜드가 됐다.

        // 6개 랭귀지의 아주 간단한 함수 표현식.
        function (a) { return a > 0; } // JS

        [](int a) { return a > 0; }  // C++

        (lambda (a) (> a 0))  ;; Lisp

        lambda a: a > 0  # Python

        a => a > 0  // C#

        a -> a > 0  // Java

##### 화살표 함수(Arrow Function)

* ES6 버전부터 javascript도 함수를 한줄로 **짧게** 선언할 수 있다. 
* Identifier => Expression으로 선언한다. 
        
        ( a, b ) => a + b;

* 한줄로 작성하고 `{}`이 없을 경우 값을 항상 return한다.(return keyword를 생략해야 한다!)
        
        const f = a => a; 
        
        f(3); //3;

* 보통은 익명 함수로 사용하나, function expression처럼 변수에 할당하여 사용할 수도 있다. 
        
        const sum = ( a, b ) => a + b;

* 함수 인자가 1개일 경우 괄호를 생략 가능하다. 
        
        a => a * a; // square

* 함수 인자가 없거나 2개 이상일 경우 그리고 가변인자를 사용할 경우 괄호가 필요하다. 

        () => console.log( 'empty call' ); // empty call

        ( a, b, c ) => a + b + c; // addAll

        ( ...rest ) => rest.reduce( ( a, b ) => a + b, 0 ); //addAll

* 함수 본문이 2줄 이상인 경우 `{}`으로 감싸야 한다. 
    
        ( iterator, needles ) => {

            for( let o of needles ){
                if( iterator.indexOf( o ) === -1 ) return false;
            }

            return true;
        }

* `{}` 블럭으로 감싼 경우 값을 반환하려면 본문 줄 수에 상관없이 `return` keyword를 사용해야 한다.
        
        const f = a => { return a }; // f(3) -> 3;

        const f2 = a => { a }; // f2(3) -> undefined;

* Arrow Function에서 this는 자신을 감싸는 외부 block scope의 this 객체를 받는다. 

        const caller = {

            f: function( o ){

                const call = () => {
                    console.log( this, this === o );
                }

                function call2(){
                    console.log( this, this === o );
                }

                this.call3 = call2;

                call(); // caller, true
                call2(); // window, false
                this.call3(); // caller, true;
            }
        }

* Arrow Function에서는 arguments 객체가 전달되지 않는다. 
    
        const args = () => console.log( arguments );
        
        args(); //Uncaught ReferenceError: arguments is not defined

* Object 객체를 return할 경우 괄호가 필요하다. 

        const plus1 = p => ({ x: p.x + 1, y: p.y + 1 });


[HigherOrder Functions](https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%B0%A8_%ED%95%A8%EC%88%98)
----

##### 정의

* 함수를 인자로 받거나 결과로 반환하는 함수를 고차 함수라 한다. 
* 함수를 일급 객체로 취급하는 JS는 고차함수를 사용할 수 있다. 

##### Array에 구현된 고차함수

* forEach - 배열을 순회하며 callback을 실행한다. 
        
        const array = [ 1,2,3,4,5,6,7,8,9,10 ];

        array.forEach( n => console.log(n) );

* map - 배열을 순회하며 callback의 결과값을 새로운 배열을 반환한다. 

        let squaredList = array.map( n => n * n );

* filter - 배열을 순회하며 callback 결과값이 true인 원소만 담은 새로운 배열을 반환한다. 
    
        let oddList = array.filter( n => n % 2 );

* reduce - 배열을 순회하며 callback 결과값을 반환한다. 

        let sum = array.reduce( (a, b) => a + b, 0 );

* every - 배열을 순회하며 callback의 결과 bool값이 모두 true일 경우 true를 반환한다. 

        let bool = array.every( n => n > 0 ); // true,

* some - 배열을 순회하며 callback의 결과 bool값에 하나라도 true가 있을 경우 true를 반환한다. 

        let bool = array.some( n => n > 100 ) // false;

* sort - 배열을 정렬한다. a, b 두 개 인자 중 a가 작으면 -1을 같으면 0을 b가 크면 1을 반환해야 안다. 

        array.sort( (a,b) => a < b ? -1 : a > b );

##### Object용 고차함수

* each - map을 순회하며 callback을 실행한다.
    
        /**
         * map을 순회하며 callback을 실행한다. 
         * @param  {[type]}   collection [description]
         * @param  {Function} callback   [description]
         * @return {[type]}              [description]
         */
        function each( collection, callback ){

            if( collection instanceof Array ){

                collection.forEach( callback );
            }
            else{

                for( var key in collection ){

                    callback( collection[key], key, collection );
                }
            }
        }

* map - 맵을 순회하며 실행한 콜백의 반환값을 원소로 하는 맵을 반환한다. 

        /**
         * 맵을 순회하며 실행한 콜백의 반환값을 원소로 하는 맵을 반환한다. 
         * @param  {[type]}   collection [description]
         * @param  {Function} callback   [description]
         * @return {[type]}              [description]
         */
        function map( collection, callback ){

            if( collection instanceof Array )
                return collection.map( callback );

            let o = {};

            each( collection, ( v, k, c ) => o[k] = callback( v, k, c ) );

            return o;
        }

* filter - 맵을 순회하며 실행한 콜백이 true인 원소들을 맵으로 반환한다. 
    
        /**
         * 맵을 순회하며 실행한 콜백이 true인 원소들을 맵으로 반환한다. 
         * @param  {[type]}   collection [description]
         * @param  {Function} callback   [description]
         * @return {[type]}              [description]
         */
        function filter( collection, callback ){

            if( collection instanceof Array )
                return collection.filter( callback );

            let o = {};

            each( collection, ( v, k, _ ) => {

                if( callback( v, k, _ ) ) o[k] = v;
            });

            return o;
        }

* reduce - 맵을 순회하여 실행한 콜백 값을 반환한다.

        /**
         * 맵을 순회하여 실행한 콜백 값을 반환한다. 
         * @param  {[type]}   collection   [description]
         * @param  {Function} callback     [description]
         * @param  {[type]}   initialValue [description]
         * @return {[type]}                [description]
         */
        function reduce( collection, callback, initialValue = undefined ){

            if( collection instanceof Array )
                return collection.reduce( callback, initialValue );

            let i = initialValue;

            each( collection, ( v, k, _ ) => {

                if( i == undefined ) {
                    i = v;
                    return;
                }

                i = callback( i, v, k, _ );
            });

            return i;
        }

* every - 맵을 순회하여 실행한 callback이 모두 true일 경우 true를 반환한다. 
    
        /**
         * 맵을 순회하여 실행한 callback이 모두 true일 경우 true를 반환한다. 
         * @param  {[type]}   collection [description]
         * @param  {Function} callback   [description]
         * @return {[type]}              [description]
         */
        function every( collection, callback ){

            if( collection instanceof Array )
                return collection.every( callback );

            return reduce( collection, (a, b, k, _) => a && callback( b, k, _ ), true );
        }

* some - 맵을 순회하여 실행한 callback 결과값 중 하나라도 true일 경우 true를 반환한다. 

        /**
         * 맵을 순회하여 실행한 callback 결과값 중 하나라도 true일 경우 true를 반환한다. 
         * @param  {[type]}   collection [description]
         * @param  {Function} callback   [description]
         * @return {[type]}              [description]
         */
        function some( collection, callback ){

            if( collection instanceof Array )
                return collection.some( callback );

            return reduce( collection, (a, b, k, _) => a || callback( b, k, _ ), false );
        }

[Iterator and for..of loop](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-iterators-and-the-for-of-loop/)
----

##### for..of 반복문

* 기존 반복문의 종류는 다음과 같다. 
        
        // 전통적인 for loop
        let a = [ 1,2,3,4,5 ];

        for( var i = 0; i < a.length; i++ ){
            console.log( a[i] );
        }
        
        // es5의 array 고차함수. 
        a.forEach( n => console.log(n) );
    
        // for..in 반복문. 
        for( var key in a ) console.log( a[key] );

* ES6에서 for..of 반복문이 추가되었다. 
* for..of 반복문은 배열의 요소, 즉 data를 순회하기 위한 구문이다. 
* forEach문과 달리 continue, break 를 지원하며 반복문을 감싸고 있는 함수를 return할 수도 있다.

        const a = [ 1,2,3,4,5,6,7,8 ];

        for( let n of a ){

            if( n % 2 ) continue;

            console.log( n );
            
            if( n > 6 ) break;
        }
        // 2, 4, 6, 8

* for..of 반복문은 문자열도 다룰 수 있다. 
    
        const string = 'abcdef';

        for( let c of string ){

            console.log( c );
        }
        // a, b, c, d, e, f

* for..of 반복문은 Map, Set 객체도 다룰 수 있다. 
* 언급한 Array, String, Map, Set 객체는 모두 Iterable 객체이기 때문이다. 

##### Iterable Object 

* 약속된 함수로 반복자(iterator)를 반환하는 객체를 말한다. 
* Array, String, Map, Set 모두 Symbol.iterator 함수가 선언되어 있고, `[Symbol.iterator]()` 호출 시 `{ next: function(){} }` 형식의 iterator 객체를 반환한다. 

        console.log( [][Symbol.iterator]() ); // Array Iterator {}
        console.log( new Map()[Symbol.iterator]() ); // MapIterator {}
        console.log( new Set()[Symbol.iterator]() ); // SetIterator {}
        console.log( 'test'[Symbol.iterator]() ); // StringIterator {}

* iterator 객체는 next 함수를 가지고 있으며 `.next()` 호출 시 `{ value: , done: }` 형태의 객체를 반환한다. 

        let iter = [1,2,3,4,5][Symbol.iterator]();

        console.log( iter.next() ); //{value: 1, done: false}

* for..of 반복문을 구현하면 다음과 같다. 
    
        let iter = [1,2,3,4,5][Symbol.iterator]();

        for( let result = iter.next(); !result.done; result = iter.next() ){
            
            console.log( iter.value );
        }

* 객체에 custom iterator 함수를 추가할 수도 있다. 
* 1씩 증가하는 무한 길이의 배열을 만들 수도 있다. 

        function infinity(){

            let n = 0;

            return {
                [Symbol.iterator]: function(){
                    return {
                        next: function(){
                            return { value: n++, done: false };     
                        }
                    };
                }
            }
        }

        for( let n of infinity() ){
            
            console.log(n);

            if( n > 10 ) break;
        }

* python의 range 함수도 만들 수 있다. 
        
        function range( a, b, n = 1 ){

            return {

                [ Symbol.iterator ]: function(){
                    return this;
                },

                next: function(){

                    if( a > b ) return { done: true };

                    let t = a;
                    a += n;

                    return { value: t, done: false };
                }
            }
        }

        for( let n of range( 2, 10, 3 ) ){
            console.log(n);
        }
        

[Symbol](http://hacks.mozilla.or.kr/2015/09/es6-in-depth-symbols/)
----

[Destructuring](http://hacks.mozilla.or.kr/2015/09/es6-in-depth-destructuring/)
----

[Collections](http://hacks.mozilla.or.kr/2015/12/es6-in-depth-collections/)
----

##### Collection

* javascript에는 이미 hash-table 처럼 사용할 수 있는 Object가 있지만 몇몇의 경우 문제가 있다. 
* 완벽히 빈 객체를 생성해야 할 때 `{}` 대신 `Object.create(null)`을 사용해야 한다. 

        console.log( {} ); // __proto__ 객체를 가지고 있다. 
        console.log( Object.create( null ) ); // 빈 객체이다. 

* 속성 key는 언제나 문자열이어야 한다. 
* 객체에 얼마나 많은 속성이 존재하는지 알아내기 위해 for..in loop가 필요하다. 

        const o = Object.create( null );

        o.a = 1;
        o.b = 2;
        o.c = 3;

        let n = 0;

        for( let k in o ) ++n;

        console.log( n ); // 3

* 이터러블(iterable) 하지 않기 때문에, for..of, 비구조화 할당등을 사용할 수 없다. 

##### Set

* new Set() 구문은 비어 있는 새로운 set 을 만든다.
* new Set(iterable) 구문은 새로운 set 을 만들고 인자로 전달된 이터러블(iterable)로 데이터를 채운다.

        let set = new Set( [ 1,2,3,4,5,1,2,3,4,5 ] ); // 새로운 셋을 생성하여 배열의 데이터로 채운다.

* `set.size` 구문은 set 안에 담겨 있는 데이터의 개수를 조회한다.
        
        console.log( set.size ); // 중복 요소가 제거되어 set의 크기는 5이다. 

* `set.has(value)` 구문은 주어진 값이 set 안에 존재할 경우 true 를 반환한다.

        console.log( set.has( 4 ) ); // true;
        console.log( set.has( 6 ) ); // false;

* `set.add(value)` 구문은 주어진 값을 set 에 추가한다. 만약 그 값이 이미 set 안에 존재하면 아무 일도 일어나지 않는다.

        console.log( set.add( 5 ).size ); // 중복된 요소를 추가하여 크기는 변하지 않는다. 
        console.log( set.add( 6 ).size ); // 중복되지 않는 요소를 추가하여 크기는 6이다;

* `set.delete(value)` 구문은 set 에서 주어진 값을 제거한다. 만약 그 값이 set 안에 존재하지 않으면 아무 일도 일어나지 않는다. .add() 구문과 .delete() 구문은 모두 set 객체 자신을 리턴하니 구문을 체인(chain) 시킬 수 있다.

        console.log( set.delete( 7 ).size ); // 없는 원소를 제거하여 크기는 변하자 않는다.
        console.log( set.delete( 6 ).size ); // 마지막으로 추가된 원소를 제거하여 크기는 5이다. 

* `set[Symbol.iterator]()` 구문은 set 안의 값들을 순회할 수 있는 새로운 이터레이터를 리턴한다. 보통의 경우 이 메소드를 직접 호출할 일은 없지만 이 메소드의 존재 때문에 set 은 이터러블(iterable) 하다. 즉, for (v of set) {...} 같은 구문을 쓸 수 있다.
* set.forEach(f)는 array의 forEach와 동일하다.
* set.clear() 구문은 set 안의 모든 데이터를 제거한다.

         set.clear(); // 모든 데이터를 제거한다. 자신을 return하지 않는다.

* `set.keys(), set.values(), set.entries()` 구문은 다양한 이터레이터들을 리턴한다. 이 이터레이터들은 Map 과의 호환성을 위해 제공된다. 
* array의 map, filter, reduce 등 util 함수들이 제공되지 않는다. 직접 구현. 
        
        /**
         * f를 실행한 결과값을 원소로 가지는 새로운 set 객체 반환
         * @param  {[type]} f [description]
         * @return {[type]}   [description]
         */
        Set.prototype.map = function( f ){

            let set = new Set();

            this.forEach( ( v, k, c ) => set.add( f(v, k, c) ) );

            return set;
        }

        /**
         * f를 실행한 결과값이 true인 원소를 가지는 새로운 set 객체 반환. 
         * @param  {[type]} f [description]
         * @return {[type]}   [description]
         */
        Set.prototype.filter = function( f ){

            let set = new Set();

            this.forEach( ( v, k, c ) => {

                if( f( v, k, c ) )
                    set.add( v );
            });

            return set;
        }

        /**
         * 원소를 순회하며 f를 실행한 결과값 반환. 
         * @param  {[type]} f            [description]
         * @param  {[type]} initialvalue [description]
         * @return {[type]}              [description]
         */
        Set.prototype.reduce = function( f, initialvalue = undefined ){

            let i = initialvalue;

            this.forEach( ( v, k, c ) =>{

                if( i == undefined ){
                    i = v;
                    return;
                }

                i = f( i, v, k, c );
            });

            return i;
        }
        
##### Map

* `new Map` 구문은 비어 있는 새로운 map 을 만든다.
* `new Map(pairs)` 구문은 새로운 map 을 만들고 그 데이터를 기존의 [key, value] 페어 컬렉션으로 채운다. pairs 인자는 기존의 Map 객체일 수도 있고, 2개의 엘리먼트를 가진 배열들로 구성된 배열일 수도 있으며, 2개의 엘리먼트를 yield 하는 제너레이터일 수도 있다.
    
        let map = new Map( [ ['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5] ] );

* `map.size` 구문은 map 에 담겨진 엔트리들의 개수를 조회한다.
        
        map.size; //5

* `map.has(key)` 구문은 주어진 key 가 존재하는지 확인합니다 (key in obj 구문처럼요).
    
        map.has( 'f' ); // false;
        map.has( 'a' ); // false;

* `map.get(key)` 구문은 key 와 연관된(associated) value 를 리턴한다. 만약 그런 엔트리가 존재하지 않을 경우 undefined 를 리턴한다.
        
        map.get( 'f' ); //undefined;
        map.get( 'a' ); //1;

* `map.set(key, value)` 구문은 map 에 key 와 value 엔트리를 추가한다. 같은 key 를 갖는 엔트리가 이미 존재할 경우 기존의 데이터를 덮어쓴다.

        map.set( 'f', 6 );
        map.set( 'a', 0 );

* `map.delete(key)` 구문은 엔트리를 삭제한다. 

        map.delete( 'f' );

* `map.clear()` 구문은 map 안의 모든 엔트리들을 제거한다.

        map.clear();

* `map[Symbol.iterator]()` 구문은 map 안의 엔트리들을 순회할 수 있는 이터레이터를 리턴한다. 해당 이터레이터는 엔트리 항목 각각을 [key, value] 배열로 표현한다.

* `map.forEach(f)` 구문은 다음과 같이 동작한다. 인자 순서가 이상한 것은 Array.prototype.forEach() 구문과 통일성을 유지하기 위해서이다.

        for (let [key, value] of map)
            f(value, key, map);

* `map.keys()` 구문은 map 안의 key 들을 순회할 수 있는 이터레이터를 리턴한다.

        for( let k of map.keys() )
            console.log( k );

* `map.values()` 구문은 map 안의 value 들을 순회할 수 있는 이터레이터를 리턴한다.

        for( let v of map.values() )
            console.log( v );

* `map.entries()` 구문은 map 안의 모든 엔트리들을 순회할 수 있는 이터레이터를 리턴한다. `map[Symbol.iterator]()` 구문과 똑같다. 사실 이것은 동일한 메소드에 대한 다른 명칭일 뿐이다.

[Generator](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-generators/)
----

[Promise](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
----

[Generator2](http://hacks.mozilla.or.kr/2016/02/es6-in-depth-generators-continued/)
----

[Proxy](http://hacks.mozilla.or.kr/2016/03/es6-in-depth-proxies-and-reflect/)
----

[Module](http://hacks.mozilla.or.kr/2016/05/es6-in-depth-modules/)
----

[Class](http://hacks.mozilla.or.kr/2016/03/es6-in-depth-classes/)
----

[SubClassing](http://hacks.mozilla.or.kr/2016/04/es6-in-depth-subclassing/)
----

Project Setting
----

[ES7](http://hacks.mozilla.or.kr/2016/07/es6-in-depth-the-future/)
----

