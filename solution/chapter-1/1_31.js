function product(term, a, b, next) {
    return a > b
           ? 1
           : term(a) * product(term, next(a), b, next); 
}

function factorial(n) {
    function identity(x) {
        return x;
    }
    
    function inc(x) {
        return x+1;
    }

    return product(identity, 1, n, inc);
}

function pi_approx(n) {
    function term(i) {
        if(i === 1)
            return 2/3;
        else {
            return (2*(Math.floor(i/2))+2)/ (2 * Math.floor((i+1)/2) + 1);
        }
    }

    function inc(x) {
        return x + 1;
    }

    return 4 * product(term, 1, 1000, inc);
}

//Iterative

function product_iter(term, a, b, next) {
    function helper(a, result) {
        if(a>b)
            return result;
        return helper(next(a), result * term(a));
    }
    return helper(a, 1);
}

function pi_approx_iter(n) {
    function term(i) {
        if(i === 1)
            return 2/3;
        else {
            return (2*(Math.floor(i/2))+2)/ (2 * Math.floor((i+1)/2) + 1);
        }
    }

    function inc(x) {
        return x + 1;
    }

    return 4 * product_iter(term, 1, n, inc);
}


console.log(factorial(6));
console.log(pi_approx(1000));
console.log(pi_approx_iter(1000));