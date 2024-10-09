function tan_cf(x, k) {
    function helper(i) {
        if(i > k)
            return 1;
        return 2*i-1 - x*x/helper(i+1, x);
    }
    
    return x/helper(1);
}


console.log(tan_cf(1, 5));