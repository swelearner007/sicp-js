function square(x) {
    return x * x;
}

function inc(x) {
    return x + 1;
}

function compose(f, g) {
    return x => f(g(x));
}

console.log(compose(square, inc)(6));