function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) {
            return arr[mid]; // x is found in the array
        } else if (arr[mid] < x) {
            floor = arr[mid]; // arr[mid] could be a potential floor
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return floor; // If x is not found, return the last floor value found
}
module.exports = findFloor