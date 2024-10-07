function f(n) {
    return n < 3
         ? n
         : f(n-1) + 2 * f(n-2) + 3 * f(n-3); 
}

function f_iter(n, a, b, c) {
    if(n === 0)
        return a;
    if(n === 1)
        return b;
    if(n === 2)
        return c;
        
    return f_iter(n-1, b, c, c + 2 * b + 3 * a);
}
console.log(f(5));

console.log(f_iter(5, 0, 1, 2));