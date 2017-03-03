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
                
                if( collection.indexOf( argumens[i] ) == -1 ) return false;
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

[Arrow Functions](http://hacks.mozilla.or.kr/2015/09/es6-in-depth-arrow-functions/)
----

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

