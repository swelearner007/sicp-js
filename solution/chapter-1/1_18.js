function doubles(x) {
    return x + x;
}

function halves(x) {
    x = x / 2;
    return parseInt(x);
}

function fast_times_iter(a, b, c) {
    if(b === 0) {
        return c;
    }
    if(b % 2 === 0) {
        return fast_times_iter(doubles(a), halves(b), c);
    } else {
        return fast_times_iter(a, b-1, c+a);
    }
}

console.log(fast_times_iter(5, 15, 0));