//code5-1 익명함수

//let foo = function () {
   // console.log("첫번줄");
   // console.log("두번쨰 줄");
// };

//foo();
//console.log(foo);

//code5-2 선언적 함수
// function foo() {
//     console.log("첫번줄");
//     console.log("두번쨰 줄");
// };

// foo();
// console.log(foo);

//code 5-3 화살표 함수
// let foo = () => {
//     console.log("첫번줄");
//     console.log("두번째 줄");
// };

// foo();
// console.log(foo);

//예제 5-1

// function foo(x) {
//     let bar = x * x;
//     return bar;
// }

// let foobar = foo(10);
// console.log(foobar);

//
// function print(message) {
//     console.log(`"${message}"라고 말했습니다`);
// }
// print("안녕하세요");

// let power = (x) => x*x;

//
// function print(name="무명", count=1) {
//     console.log(`${name}이/가 ${count}개 있습니다.`);
// }
// print("사과", 10);
// print("사과");
// print();

//
// function tenTimes(foo) {
//     for (let i = 0; i < 10; i++){
//         foo();
//     }
// }

// tenTimes(function(){
//     console.log("함수 호출");
// });

//
// let inputA = '52';
// let inputB = '52.273';
// let inputC = '1403A';

// console.log(parseInt(inputA));
// console.log(parseFloat(inputA));

// console.log(parseInt(inputB));
// console.log(parseFloat(inputB));

// console.log(parseInt(inputC));

// console.log(Number(inputA));
// console.log(Number(inputB));
// console.log(Number(inputC));

//

// let foo =setInterval(() => {
//    console.log("인터벌 1초 경과!!!");
// }, 1000)

// setTimeout(( )=> {
//    clearInterval(foo);
// }, 6000)

//
// let foo;
// foo =10;
// foo =20;
// foo = "세번째";

// console.log(foo);

// let foo;
// foo = () => {console.log("1st");}
// foo = () => {console.log("2nd");}

// foo();

let name = "dong"
foo =() => {
   let name ="synn";
   console.log(this.name);
};
function foo() {
   console.log("this.name");
};

foo();