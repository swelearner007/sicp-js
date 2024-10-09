function fixed_point(f, first_guess) {
    function abs(x) {
        return x>=0
             ? x
             : -x;
    }
    function close_enough(x, y) {
        return (abs(x-y) < 0.001);
    }
    
    function fp_helper(f, guess) {
        const next = f(guess);
        return close_enough(guess, next)
             ? next
             : fp_helper(f, next);
    }
    return fp_helper(f, 1);
}

console.log(fixed_point(x => 1+1/x, 1));
//This will print the value of golden ratio