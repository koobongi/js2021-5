//
let now = new Date();
let before = new Date("Dec 9, 2020");

let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

console.log(interval);


//
// let date = new Date(); // 현재 시간을 구한다
// console.log(date); // 출력1
// date.setFullYear(date.getFullYear()+1);
// date.setMonth(date.getMonth()+11);
// date.setDate(date.getDate()+3);
// console.log(date); //출력2



//
// let foo = new Date();
// console.log(foo);


//
// let foo = "좋은 아침입니다.";

// if (foo.indexOf('아침')>=0) {
//     console.log("굿모닝");
// }
// else {
//     console.log("굿나잇");
// }


//
// let foo = "abcdefg";
// let bar = foo.toUpperCase();
// let foobar = bar.toLowerCase();
// console.log(foo);
// console.log(bar);
// console.log(foobar);


//
// let foo = Number.MAX_VALUE;
// let bar = Number.MAX_VALUE+1;

// console.log(foo);
// console.log(bar);

//
// function Construtor() {}
// Construtor.foo = 273;
// Construtor.bar = function () {}

// console.log(Construtor.foo);
// console.log(Construtor.bar);


//
// let foo = 25.123

// console.log(foo.toFixed(1)); // 25.1
// console.log(foo.toFixed(3));
