const arr = [[1, 2], [3, 4, [5, 6, 7]]];
function fnConvertToSDA(arr) {
    // const output = arr.flat(Infinity);
    let output = arr.join().split(",").map((ele) => parseInt(ele))
    return output
}
const result = fnConvertToSDA(arr);
console.log(result);