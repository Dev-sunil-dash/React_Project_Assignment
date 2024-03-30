const arr = [33, 322, 48, 2, 53, 88, 29, 844, 8, 6, 5]
function findSmallAndLarge(input) {
    input.sort((a, b) => a - b);
    let min = input[0];
    let max = input[input.length - 1]
    return [min, max];
    ///-----using for loop-----
    // let min = input[0];
    // let max = input[0];
    // for (let index = 0; index < input.length; index++) {
    //     if (input[index] < min) {
    //         min = input[index]
    //     }
    //     if (input[index] > max) {
    //         max = input[index]
    //     }
    // }
    //------using Math--------
    // let min = Math.min(...input);
    // let max = Math.max(...input);
    // return [min, max];
}
const [x, y] = findSmallAndLarge(arr);
console.log(`x value should be ${x}`);
console.log(`y value should be ${y}`);