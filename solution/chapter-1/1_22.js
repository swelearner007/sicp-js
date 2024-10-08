function square(x) {
    return x * x;
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, test_divisor + 1);
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function divides(a, b) {
    return b % a === 0;
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function timed_prime_test(n) {
    console.log(n);
    return start_prime_test(n, new Date());
}

function start_prime_test(n, start_time) {
    return is_prime(n)
    ? report_prime(new Date() - start_time)
    : false;
}

function report_prime(elapsed_time) {
    console.log(" *** ");
    console.log(elapsed_time);
    return true;
}

function search_for_primes(start, end) {
    let startTime = new Date();
    let i = start;
    if(i % 2 === 0)
        i++;
    for(; i <= end; i += 2) {
        timed_prime_test(i);
        console.log("----------")
    }
    let endTime = new Date();
    console.log("Time Elapsed: ", endTime-startTime);
}

console.log(search_for_primes(1000000, 2000000));

//It has time complexity theta(n*sqrt(m)), where n -> count of numbers in range, m -> number to be tested for prime