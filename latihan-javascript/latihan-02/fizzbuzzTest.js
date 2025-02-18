function fizzBuzz(total) {
    for (let i = 1; i <= total; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizz Buzz");
        } else if (i % 3 == 0) {
            console.log("fizz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz(100);

function ganjil(nomer) {
    for (let i = 1; i <= nomer; i++) {
        if (i % 2 == 0) {
            console.log("Genap")
        } else {
            console.log("Ganjil")
        }
    }
}

// ganjil(10);

function basicOp(operation, value1, value2) {
    let x = value1;
    let y = operation
    let t = value2
    return x, y, t;
}

console.log(basicOp('+', 5, 6));