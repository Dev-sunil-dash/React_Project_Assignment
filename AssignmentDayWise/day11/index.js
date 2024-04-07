function findVowelsCount(input) {
    const vowels = ["a", "e", "i", "o", "u"];
    count = 0;
    vowels.forEach(ele => {
        if (input.includes(ele)) {
            count++;
        }
    });
    return count
}
console.log(findVowelsCount("nit"));