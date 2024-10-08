function expmod(a, n, m) {
    if(n === 0)
        return 1;
    let ans = expmod(a, n/2, m)%m;
    ans = (ans * ans)%m;
    if(n % 2 === 1) {
        ans = (ans * a%m)%m;
    }
    return ans;
}

function fermatTest(n) {
    let a = Math.floor(Math.random()*n);
    if(expmod(a, n, n) === a%n) {
        return true;
    }
    else return false;
}

function isPrime(n) {
    let testCount = 10;
    for(let i = 0;i < testCount;i++) {
        if(!fermatTest(n)) {
            return false;
        }
    }
    return true;
}

let startTime = new Date();

console.log(isPrime(100001));

let endTime = new Date();
console.log(endTime-startTime);