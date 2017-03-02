ES6 in Depth
====


[let, const](http://hacks.mozilla.or.kr/2016/03/es6-in-depth-let-and-const/)
----
var의 문제점. 
* 블럭이 Scope를 결정하지 않는다. 
* 루프안의 변수가 과도하게 공유된다. 

let
* 새로운 변수 선언 키워드이다. 
* 블럭을 기준으로 스코프를 결정한다.
* 글로벌 let 변수는 글로벌 객체의 속성이 아니다. 
* for(let i... ) 형태의 루프는 반복할 때마다 변수 i를 새로 바인딩한다. 
* let 변수는 선언 전에 참조하면 에러를 발생한다. 
* let 변수는 중복 선언시 Syntax 에러를 발생한다. 

const
* 상수 선언 키워드이다. 
* 선언과 동시에 할당을 해야한다. 
* const 상수에 값을 할당하면 에러이다. 
* 값을 할당하지 않는 const 선언은 에러이다. 

     
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

[Rest and Default Prameter](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-rest-parameters-and-defaults/)
----

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

