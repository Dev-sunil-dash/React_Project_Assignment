function getPrimeNumbers(a, b) {
    let primes = [];
    for (let i = ++a; i <= b; i++) {
        let isPrime = true;
        if (i <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                // console.log("j=" + j);
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primes.push(i)
        }
    }
    return primes;
}
console.log(getPrimeNumbers(8, 49));