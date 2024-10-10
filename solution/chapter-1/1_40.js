function derivative(g) {
    let dx = 0.00001;   //10^-5
    return x => (g(x + dx) - g(x))/dx;
}

function newton_transform(g) {
    return x => x - g(x)/derivative(g)(x);
}

function fixed_point(f, x) {
    if(f(x) === x)
        return f(x);
    else return fixed_point(f, f(x));
}

function newton_method(g, guess) {
    return fixed_point(newton_transform(g), guess);
}

function cubic(a, b, c) {
    return x => x * x * x + a * x * x + b * x + c; 
}

console.log(newton_method(cubic(1, 1, -14), 1));
