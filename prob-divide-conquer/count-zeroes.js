function countZeroes(arr) {
    let firstZeroIndex = arr.indexOf(0);
    if (firstZeroIndex === -1) {
        return 0; // in case there are no zeroes in the array
    }
    return arr.length - firstZeroIndex;
}

module.exports = countZeroes