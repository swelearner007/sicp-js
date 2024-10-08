function smallest_divisor(n) {
    if(n % 2 === 0) {
        return 2;
    }
    for(let i = 3;i * i <= n;i+=2) {
        if(n % i === 0) {
            return i;
        }
    } 
    return n;
}

console.log(smallest_divisor(199));
console.log(smallest_divisor(1999));
console.log(smallest_divisor(19999));