function inc(x) {
    return x+1;
}

function double(f) {
    return x => f(f(x));
}

console.log(double(inc)(1));
console.log(double(double(double))(inc)(5));