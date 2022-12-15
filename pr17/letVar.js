let a = 10; //a global

if (a) {
    let a = 3; //a local
    a *= 3;
    console.log(a);
}

console.log(a);

var b = 10; //b global

if (b) {
    var b = 3; //b local
    b *= 3;
    console.log(b);
}

console.log(b);

