function filtered_accumulate(combine, filter, null_value, term, a, next, b) {
    if(a>b)
        return null_value;
    if(filter(a)) {
        return combine(term(a), filtered_accumulate(combine, filter, null_value, term, next(a), next, b));
    } else {
        return filtered_accumulate(combine, filter, null_value, term, next(a), next, b);
    }
    
}


function sumSqPrimes(a, b) {

    function square(x) {
        return x*x;
    }

    function inc(x) {
        return x+1;
    }

    function combine(x, y) {
        return x + y;
    }

    function isPrime(n) {
        if(n < 2)
            return false;
        if(n === 2)
            return true;
        if(n % 2 === 0) {
            return false;
        }
        for(let i = 3;i * i <= n;i++) {
            if(n % i === 0) {
                return false;
            }
        }
        return true;
    }

    return filtered_accumulate(combine, isPrime, 0, square, a, inc, b);
}

function productRelPrimes(n) {
    function identity(x) {
        return x;
    }

    function inc(x) {
        return x+1;
    }

    function combine(x, y) {
        return x * y;
    }

    function gcd(a, b) {
        if(b === 0)
            return a;
        return gcd(b, a%b);
    }

    function isRelPrime(x) {
        return gcd(x, n) === 1;
    }

    return filtered_accumulate(combine, isRelPrime, 1, identity, 2, inc, n);
}

console.log(sumSqPrimes(1, 10));
console.log(productRelPrimes(5));