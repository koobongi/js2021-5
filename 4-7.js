let output = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >i; j--) {
        output += "";
    }
    for (let j =1; j<(i*2); j++) {
        output += "*"
    }
    output += "\n";
}
for (let s = 1; s <= 4; s++) {
    for (let d= 0; d <s; d++) {
        output += " ";
    }
    for (let a=9; a>s*2; a--) {
        output += "*";
    }
    output +="\n";
}
console.log(output);