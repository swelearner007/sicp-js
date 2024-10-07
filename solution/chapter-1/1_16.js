function fastexp_iter(a, b, n) {
    // a * b is invariant
    if(n === 0)
        return a;
    if(n%2 === 0) {
        return fastexp_iter(a, b*b, n/2);
    } else {
        return fastexp_iter(a*b, b, n-1);
    }
}

console.log(fastexp_iter(1, 2, 10));