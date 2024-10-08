function term(x) {
    return x;
}

function next(x) {
    return x+1;
}

function combine(x, y) {
    return x * y;
}

function accumulate(combine, null_value, term, a, next, b) {
    if(a>b)
        return null_value;

    return combine(term(a), accumulate(combine, null_value, term, next(a), next, b));
}

/************ Iterative ***************/
function accumulate_iter(combine, null_value, term, a, next, b) {
    function accumulate_iter_help(a, result) {
        if(a > b) {
            return result;
        }
        return accumulate_iter_help(next(a), combine(result, term(a)));
    }
    return accumulate_iter_help(a, null_value);
}

console.log(accumulate(combine, 1, term, 1, next, 5));
console.log(accumulate_iter(combine, 1, term, 1, next, 5));