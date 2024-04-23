Array.prototype.myFilter = function (predicate, thisArg) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        let boolValue = predicate.call(thisArg, this[i], i, this);
        if (boolValue) {
            output = [...output, this[i]]
        }
    }
    return output;
}
var arr = [22, 33, 44];
const result = arr.myFilter(function (val, ind) {
    return val > this.maxValue;
}, { maxValue: 30 });
console.log(result);