function fixed_point(f, first_guess) {
    function abs(x) {
        return x>=0
             ? x
             : -x;
    }
    function close_enough(x, y) {
        return (abs(x-y) < 0.00001);
    }
    
    function fp_helper(f, guess) {
        console.log(guess);
        const next = f(guess);
        return close_enough(guess, next)
             ? next
             : fp_helper(f, next);
    }
    return fp_helper(f, 2);
}

console.log(fixed_point(x => (Math.log(1000)/Math.log(x)), 1));
console.log("------------------------------");
console.log(fixed_point(x => 0.5*((Math.log(1000)/Math.log(x)) + x), 1));

//Here, the one with average damping i.e the second one takes less steps to converge