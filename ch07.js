let foo = 273;

Number.prototype.method = function() {
    return "hello";
}

console.log(foo.method());