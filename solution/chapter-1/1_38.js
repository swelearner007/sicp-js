function approx_e(n, d, k) {
    function helper(i) {
        if(i > k)
            return 0;
        return n(i)/(d(i) + helper(i+1));
    }
    
    return 2 + helper(1);
}

console.log(approx_e(x => 1, x => {
    return x < 3
         ? x
         : x % 3 === 0
         ? 1
         : x % 3 === 1
         ? 1
         : 2 * (x/3);
}, 10));