function smooth_function(f) {
    let dx = 0.00001;
    return x => (f(x-dx) + f(x) + f(x+dx))/3;
}

function nfoldSmoothedFunction(f, n) {
    function repeated(f, n) {
        if(n === 1) {
            return x => f(x);
        }
    
        if(n > 1)
            return x => f(repeated(f, n-1)(x));
    }
    return repeated(smooth_function, n)(f);
}

function square(x) {
    return x * x;
}

console.log(smooth_function(square)(2));
console.log(nfoldSmoothedFunction(square, 10)(2));