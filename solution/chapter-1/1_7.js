let j = 0;

function abs(x) {
    return x >= 0? x: -x;
}

function isGoodEnough(newGuess, oldGuess) {
    if(abs(newGuess/oldGuess-1) < 0.000000000001) {
        return true;
    } else return false;
}

function improve(guess, x) {
    return (x/guess + guess) / 2;
}

function sqrt_iter2(guess, x) {
    j++;
    return isGoodEnough(improve(guess, x), guess)? improve(guess, x): sqrt_iter2(improve(guess, x), x);
}

console.log(sqrt_iter2(1, 100));
/*
This will perform better in case of very small numbers and very large numbers because of relative change in guesses
An upper limit for absolute difference is a bad idea as it may be very significant or insignificant relative to
the guessed number and thus may reduce performance by needing to perform more iterations
*/