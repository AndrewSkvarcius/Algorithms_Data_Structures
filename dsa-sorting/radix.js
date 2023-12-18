function radixSort(arr) {
    if (!Array.isArray(arr)) return null;

    // Determine the maximum number of digits
    const maxNum = Math.max(...arr).toString().length;

    for (let digit = 0; digit < maxNum; digit++) {
        let buckets = Array.from({ length: 10 }, () => []);

        // Place each number in the corresponding bucket
        for (let i = 0; i < arr.length; i++) {
            const digitValue = getDigit(arr[i], digit);
            buckets[digitValue].push(arr[i]);
        }

        // Reconstruct the array by concatenating all subarrays
        arr = [].concat(...buckets);
    }

    return arr;
}

// A helper function to get the digit at a specific place
function getDigit(number, place) {
    return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

module.exports = radixSort;