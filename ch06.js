// let foo = ["사과", "배", "바나나", "딸기"];

// console.log(foo[0]);
// console.log(foo[3]);

// let foo ={
//     제품명: "건조 망고",
//     유형: "당절임",
//     원산지: "필리핀",
//     price: 1200
// };

// console.log(foo);
// console.log(foo.제품명);
// console.log(foo.price);

// for (let key in foo) {
//     console.log(`${key}: ${foo[key]}`);
// }

// let foo = {
//     name: "건조 망고",
//     price: 1200,
//     print: function () {
//         console.log(`${this.name} - ${this.price}`);
//     }
// };

// foo.print();

//

// let products = [
//     {name: '사과', price: 1200},
//     {name: '배', price: 1500},
//     {name: '사자두', price: 1000},
//     {name: '딸기', price: 2000},
//     {name: '바나나', price: 1500},
// ];

// function printProduct(bar) {
//     console.log(`${bar.name} - ${bar.price}`);
// }

// for (let foo of products) {
//     printProduct(foo);
// }

//

function Product(foo, bar) {
    this.foo1 = foo;
    this.bar1 = bar;
}

let product = new Product("바나나", 1200);

console.log(product);