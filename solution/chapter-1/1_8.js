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
    return (x/(guess * guess) + 2 * guess) / 3;
}

function cube_iter(guess, x) {
    j++;
    return isGoodEnough(improve(guess, x), guess)? improve(guess, x): cube_iter(improve(guess, x), x);
}

console.log(cube_iter(1, 1000));