function cont_frac(n, d, k) {
    function helper(i) {
        if(i > k)
            return 0;
        return n(i)/(d(i) + helper(i+1));
    }
    
    return helper(1);
}

function cont_frac_iter(n, d, k) {
    function helper_iter(total, i) {
        if(i > k)
            return total;
        return helper_iter(n(i)/(d(i) + total), i+1);
    }
    
    return helper_iter(0, 1);
}

console.log(cont_frac(x => 1, x => 1, 11));
console.log(cont_frac_iter(x => 1, x => 1, 11));

//k = 11 is sufficient to get precision upto 4 decimal points(derived experimentally, not theoretically)