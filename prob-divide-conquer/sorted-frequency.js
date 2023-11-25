function findFirst(arr, num, low, high) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            return mid;
        } else if (num > arr[mid]) {
            return findFirst(arr, num, mid + 1, high);
        } else {
            return findFirst(arr, num, low, mid - 1);
        }
    }
    return -1;
}

function findLast(arr, num, low, high) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            return findLast(arr, num, low, mid - 1);
        } else {
            return findLast(arr, num, mid + 1, high);
        }
    }
    return -1;
}

function sortedFrequency(arr, num) {
    let first = findFirst(arr, num, 0, arr.length - 1);
    let last = findLast(arr, num, 0, arr.length - 1);
    
    if (first === -1) return -1; // num not present in arr
    return last - first + 1;
}

module.exports = sortedFrequency