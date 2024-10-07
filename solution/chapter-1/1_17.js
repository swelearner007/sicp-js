function doubles(x) {
    return x + x;
}

function halves(x) {
    x = x / 2;
    return parseInt(x);
}

function fast_times(a, b) {
    if(b === 0)
        return 0;
    if(b % 2 === 0) {
        return doubles(fast_times(a, halves(b)));
    }
    else {
        return a + doubles(fast_times(a, halves(b)));
    }
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

console.log(fast_times(5, 15));
console.log(fast_times_iter(5, 15, 0));