function iterative_improve(isGoodEnough, improveGuess) {
    return guess => {
        while(!isGoodEnough(guess)) {
            guess = improveGuess(guess);
        }
        return guess;
    }
}

function fixed_point(f, guess) {
    return iterative_improve(guess => Math.abs(guess - f(guess)) < 1e-5, guess => f(guess))(guess);
}

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

console.log(fixed_point(nfoldAverageDamp(x => 81/x, 2), 4));