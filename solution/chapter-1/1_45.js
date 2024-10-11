function average_damp(f) {
    return y => 0.5 * (f(y) + y);
}

function nfoldAverageDamp(f, n) {
    function repeated(f, n) {
        if(n === 1) {
            return x => f(x);
        }
    
        if(n > 1)
            return x => f(repeated(f, n-1)(x));
    }
    
    return repeated(average_damp, n)(f);
}

function fixed_point(f, guess) {
    let next = f(guess);
    if(next === guess) {
        return next;
    }
    else {
        return fixed_point(f, next);
    }
}

function fourth_root(n) {
    // return fixed_point(y => n/(y*y*y), 1); this is not converging max call stack size reached
    return fixed_point(nfoldAverageDamp(y => n/(y*y*y), 2), 1);
}

function nth_root(num, n) {
    return fixed_point(nfoldAverageDamp(y => {
        let ans = num;
        for(let i = 0;i < n-1;i++) {
            ans /= y;
        }
        return ans;
    }, Math.floor(Math.log2(n))), 1);
}

console.log(fourth_root(16));
console.log(nth_root(125, 3));

//2fold average_damp -> for upto 4
//3fold average_damp for upto 15
//4fold average_damp for upto 31
//Clearly, nth root required log2(n) fold average_damp