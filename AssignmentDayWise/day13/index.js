const arr = [22, 15, 35, 83];
Array.prototype.myMap = (array, callback) => {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(callback(array[i], i, array));
    }
    return mappedArray;
};
const result = arr.myMap((val, ind) => {
    return val + 10
});
console.log(result);