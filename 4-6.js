let foo = [10, 20, 30, 40, 50];

for (let i in foo) {
    console.log(`${i}번떄 요소는 ${foo[i]}이다.`)
}
// bar = foo [0];

for (let item of foo) {
    console.log(item)
}
//123123 test