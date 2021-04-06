# 구본기 [201540202]

## [04월13일]

## [04월06일]

##### 반복문

for in 반복문은 객체의 속성들을 반복하여 작업을 수행할 수 있습니다. 모든 객체에서 사용이 가능합니다. for in 구문은 객체의 key 값에 접근할 수 있지만, value 값에 접근하는 방법은 제공하지 않습니다. 자바스크립트에서 객체 속성들은 내부적으로 사용하는 숨겨진 속성들을 가지고 있습니다. 그 중 하나가 [[Enumerable]]이며, for in 구문은 이 값이 true로 셋팅되어 속성들만 반복할 수 있습니다. 이러한 속성들을 열거형 속성이라고 부르며, 객체의 모든 내장 메서드를 비롯해 각종 내장 프로퍼티 같은 비열거형 속성은 반복되지 않습니다. <br />

for of 반복문은 ES6에 추가된 새로운 컬렉션 전용 반복 구문입니다. for of 구문을 사용하기 위해선 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야만 합니다(직접 명시 가능). <br />

##### for in 반복문과 for of 반복문의 차이점

* for in 반복문 : 객체의 모든 열거 가능한 속성에 대해 반복 <br />
* for of 반복문 : [Symbol.iterator] 속성을 가지는 컬렉션 전용 <br />

##### break문 

반복문이 실행되고 있는 시점에서 가장 근접한 반복문(루프) 탈출 <br />
여러 개의 루프가 중첩된 경우 현재 위치한 루프 하나만 탈출 <br /> 

##### 배열에 값을 추가하는 함수

* .push() : 배열의 맨 끝에 값을 추가한다 <br />
* .unshift() : 배열의 맨 앞에 값을 추가한다 <br />

##### 배열에 값을 제거하는 함수

* .pop() : 배열의 맨 끝에 값을 제거한다. <br />
* .shift() : 배열의 맨 앞에 값을 제거한다 <br />


---

## [03월30일]

##### 조건문이란?
주어진 조건식의 평가 결과에 따라 코드 블럭의 실행을 결정한다. <br />
 조건식은 Boolean값으로 평가될 수 있는 표현식이다. <br />
조건문에는 if문과 switch문이 대표적이다.
<br />

<h5>● switch 조건문</h5>
 if…else 문의 조건식이 반드시 불리언 값으로 평가되는 반면,
switch 문의 표현식은 불리언 값보다는 문자열, 숫자 값인 경우가 많다.
if…else 문은 논리적 참, 거짓으로 실행할 코드 블록을 결정한다.
하지만 switch 문은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용한다. <br />
<br />

##### 삼항 연산자 <br />

● 기본 형태 <불 표현식> ? <참> : <거짓> <br />
//참과 거짓 위치에 불 자료형 <br />
console.log (nmber % 2 == 0? true : false); <br />
//참과 거짓 위치에 문자열 자료형 <br />
console.log (nmber % 2 == 0 ? 짝수 : 홀수); <br />

###### ex) let number = 31; <br />

###### console.log(number % 2 == 0?"짝수":"홀수"); <br />
<br />
삼항 연산자를 활용한 변수 초기화<br />

* 변수가 undefined일 때만 초기화 <br />
ex) //변수를 선언합니다 <br />
let test; <br />
//삼항 연산자로 해당 변수가 undefined인지 확인하고 초기화합니다 <br />
test = test ? test : "초기화합니다_1"; <br />
console.log(test); <br />
//삼항 연산자로 해당 변수가 undefined인지 확인하고 초기화합니다 <br />
test = test ? test : "초기화합니다_2"; <br />
console.log(test); <br />
<br />

#### 반복문
* 붙여 넣기를 사용한 반복 - 1000번 출력하는 것은 무리 <br />
ex) console.log("출력"); <br />
    console.log("출력"); <br />
    console.log("출력"); <br />
* 반복문을 사용한 반복 <br />
ex) for (let i = 0; i < 1000; i++) { <br />
    console.log("출력"); <br />
    } <br />
    <br />
##### ※ 배열
* 여러 개의 자료를 한꺼번에 다룰 수 있는 자료형 <br />
* 대괄호 내부의 각 자료는 쉼표로 구분 <br />
* 배열에는 여러 자료형이 섞여 있을 수 있음 <br />
* 요소 : 배열 안에 들어 있는 각 자료 <br />
º 배열 선언 <br />
 let array = [52, 273, '아침밥', '점심밥', true, false] <br />
 undefined <br />
 array <br />
 [52, 273, '아침밥', '점심밥', true, false] <br />
 <br />

 ##### 


---

## [03월23일]

츌력하고싶은게 ''이면 문자열을 ""로 잡아준다 <br />
이스케이프 문자를 사용하면 \\"String" 로사용 <br />
\t 수평 탭 \n 줄바꿈 \\' 작은따옴표 \\" 큰따옴표 등등 특수문자를 사용할때 사용 <br />
문자열 + 문자열 = 두 개의 문자열을 합친 문자열<br /> ex) "abc" + "def"; = 'abcdef' <br />
문자열[숫자] 의 대괄호는 [ ] < 배열을 의미함  <br /> ex) let a ="hello world!"; > a[4]; > o


템플릿 문자열[ECMAScript6] = 생성된 문자열에 ''가 찍혀서 나온다 ` = backtick
문자열+숫자 = 문자열 
>ex)'52+273 = ' + (52+273); 결과 :  '52+273 = 325' <br />
>ex2) '올해는' + new Date().getFullYear(); 결과 : '올해는2021' <br />
>`올해는 ${new Date().getFullYear()}`; 결과 : '올해는 2021' 

논리합 연산자 : 하나라도 true 일경우 true <br />
논리곱 연산자 : 하나라도 false 일경우 false <br />
<br />
변수 선언 = let 식별자;  / 변수 : 값을 저장할 떄 사용하는 공간<br />
변수를 선언했으나 초기화하지 않은 자료형 = undefined 자료형 <br /> ex) let a = undefined <br />
Boolean() 함수 를사용하면 5개의 요소는 false로 변환 <br />
불 자료형 자동 변환 > ! 연산자를 두번 사용해 Boolean()함수를 사용하는 것과 같은 효과<br />
<br />
<h5>일치 연산자 : 자료형까지 검사 </h5><br />  === : 자료형과 값이 같은지 비교합니다. , !== : 자료형과 값이 다른지 비교합니다 <br />
<h4>▶ 상수</h4> <br />
⊙ '항상 같은 수'라는 의미, 변수와 반대되는 개념 <br />
⊙ const :  상수constant를 만드는 키워드 <br />
⊙ 변하지 않을 대상에 상수를 적용<br />
<br />
if 조건문 기본 형태 : if(<불 표현식>) { } <br />
if (<불표현식>) { } // 불 표현식이 참일 때 실행할 문장<br />
else = // 불 표현식이 거짓일 때 실행할 문장

---

## [03월16일]

> 오늘 배운 내용 요약 <br />
> 여러줄 요약<br>
> 예시

Terminal에 node를 입력하고 간단하게 실행을 시켜볼수있다 웹 브라우저 검사(f12)콘솔에서도 가능 <br />
Ctrl+D를누르면 다시 돌아올수있다 <br />
meta 는 타이틀위에 js와 css는 타이틀 아래 <br />
표현식이 모일 경우 마지막에 종결의미로 세미콜론(;)사용 <br />

* 식별자<br />
<ol>▶ 이름을 붙일 떄 사용하는 단어, 변수와 함수 이름 등으로 사용</ol>

<br>Ctrl + / 키를 사용시 그 문단을 주석으로 만들어줌
주석은 가능한 많이달아주고 커밋도 자주해주는편이 좋다 (주석은 실행에 영향을 주지않음)</br>
