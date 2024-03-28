var arr = [1, 2, 3, 4, 1, 8, 2, 7, 2, 3, 2, 3, 4, 5, 2];
var mostFrequentNum = 0;
var mostFrequentCount = 0;
for (let i = 0; i < arr.length; i++) {
    var currentNum = arr[i];
    var currentCount = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === currentNum) {
            currentCount++;
        }
    }
    if (currentCount > mostFrequentCount) {
        mostFrequentCount = currentCount;
        mostFrequentNum = currentNum;
    }
}
console.log(`The most frequent number is ${mostFrequentNum} and it repeats ${mostFrequentCount} times`);