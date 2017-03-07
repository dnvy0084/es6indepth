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


[HigherOrder Functions](https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%B0%A8_%ED%95%A8%EC%88%98)
----

[Collections](http://hacks.mozilla.or.kr/2015/12/es6-in-depth-collections/)
----

[Symbol](http://hacks.mozilla.or.kr/2015/09/es6-in-depth-symbols/)
----

[Iterator and for..of loop](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-iterators-and-the-for-of-loop/)
----

[Destructuring](http://hacks.mozilla.or.kr/2015/09/es6-in-depth-destructuring/)
----

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

