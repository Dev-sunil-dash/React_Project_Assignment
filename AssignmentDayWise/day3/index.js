const input = "nnniiiittnnnitt";
function countChars(input) {
    let count = {};
    for (let char of input) {
        count[char] = (count[char] || 0) + 1;
    }
    const result = Object.entries(count).map(([key, value]) => key + value).join('');
    return result;
}
console.log(countChars(input));

// const input = "nnniiiittnnnitt";
// let res = '';
// const count = [...input].reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
// }, {});
// for (let key in count) {
//     if (count.hasOwnProperty(key)) {
//         res += key + count[key];
//     }
// }
// console.log(res);