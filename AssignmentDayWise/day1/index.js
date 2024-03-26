// const obj1 = { n1: 10, n2: 20 };
// const obj2 = { n1: 10, n2: 20 };
// function equals(obj1, obj2) {

//     return true;
// }
// equals(obj1, obj2)
// fill the Gap


const obj1 = { n1: 10, n2: 20 };
const obj2 = { n1: 10, n2: 20 };

function equals(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if both objects have the same number of keys
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all keys in obj1 exist in obj2 and have the same values
    for (let key of keys1) {
        if (!keys2.includes(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

console.log(equals(obj1, obj2));