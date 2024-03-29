var arr1 = [10, 20, 30, 40];
var arr2 = [10, 20, 30, 40];
function equals(val1, val2) {
    if (val1.length !== val2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log(equals(arr1, arr2));