function square(x) {
    return x * x;
}

function squareOfTwoNums(x, y) {
    return x * x + y * y;
}

function sumSquareTwoBiggerNums(x, y, z) {
    if(x <= y && x <= z) {
        return squareOfTwoNums(y, z);
    } else if(y <= z && y <= x) {
        return squareOfTwoNums(z, x);
    } else {
        return squareOfTwoNums(x, y);
    }
}

console.log(sumSquareTwoBiggerNums(1, 2, 3));