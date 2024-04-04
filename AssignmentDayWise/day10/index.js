//Write a function to find the longest word in a sentence using reduce method.

function findLongest(sentence) {
    const words = sentence.split(" ");
    let longestWord = words.reduce((longestValue, currentValue) => {
        if (currentValue.length > longestValue.length) {
            return currentValue;
        } else {
            return longestValue;
        }
    });
    return longestWord;
}
console.log(findLongest("Hi this is Sachin"));

//output is Sachin.