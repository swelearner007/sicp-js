function repeated(f, n) {
    if(n === 1) {
        return x => f(x);
    }

    if(n > 1)
        return x => f(repeated(f, n-1)(x));
}

function square(x) {
    return x * x;
}

console.log(repeated(square, 2)(5));