// const input=[1,2,3,4,1,8,7,2,3,4,5]
// expected output is [5,7,8]
// Hint: To get the output, remove the element(s) which are duplicate.

const input = [1, 2, 3, 4, 1, 8, 7, 2, 3, 4, 5];

const countObj = {};

input.forEach(element => {
    countObj[element] = (countObj[element] || 0) + 1;
});
console.log(countObj);

let filteredData = Object.keys(countObj).filter((key) => {
    return countObj[key] === 1;
}).map(Number)

console.log(filteredData);
