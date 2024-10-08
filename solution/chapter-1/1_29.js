function identity(x) {
    return x;
}

function term(f, a, i, n) {
    if(i === 0 || i === n) {
        return f(a);
    }
    else if(i % 2 === 0) {
        return 4 * f(a);
    }
    else {
        return 2 * f(a);
    }
}


function compute_integral(term, a, b, n) {
    let sum = 0;
    let h = (b-a)/n;
    for(let i = 0;i<=n;i++) {
        sum += term(identity, a+i*h, i, n);
    }
    sum *= (h/3);
    return sum;
}

console.log(compute_integral(term, 0, 1, 100));
console.log(compute_integral(term, 0, 1, 1000));