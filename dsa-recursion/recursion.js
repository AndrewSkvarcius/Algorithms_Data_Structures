/** product: calculate the product of an array of numbers. */

function product(nums) {
// base case
if (nums.length === 0) return 1;

// recursive steps
return nums[0] * product(nums.slice(1));
}


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
 // base case: if the array is empty, return 0
 if (words.length === 0) {
  return 0;
}

// recursive step: Compare the length of the current word with the longest in the rest
return Math.max(words[0].length, longest(words.slice(1)));
}



/** everyOther: return a string with every other letter. */

function everyOther(str, index=0) {

  // base case: if the string is empty or only one character is left
if (index >= str.length) {
  return '';
}

// append the current character and make a recursive call skipping the next character
return str[index] + everyOther(str, index + 2);
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // base case: if string is empty || has a single character 
  if (str.length <= 1) return true;

  // check if first and last character are the same 
  if(str[0] === str[str.length - 1]){
    return isPalindrome(str.slice(1, -1));
  }
    // first and last characters are not the same return false 
    return false;
  }



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index=0) {

// base case: if index is equal to arry length return -1
if (index === arr.length)return -1;

// check if current element matches val
if(arr[index] === val) return index;

// recursive step check next index
return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
// base case: if the string is empty, return an empty string
if (str === '') {
  return '';
}

// recursive step: take the last character and append the result of the recursive call with the rest of the string
return str[str.length - 1] + revString(str.substring(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArray = [];

  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          // If the property is a string, add it to the array
          stringsArray.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          // If the property is an object, recursively gather strings from it
          stringsArray = stringsArray.concat(gatherStrings(obj[key]));
      }
  }

  return stringsArray;
}




/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length -1) {
  // base case 
  if(start > end) return -1;
  
  // find middle index
  let midIdx = Math.floor((start + end) / 2);
  
  // check if middle element is value we are looking for 
  if(arr[midIdx] === val) {
    return midIdx;
  }

  // if value is smaller then middle 
  if(arr[midIdx] > val) {
    return binarySearch(arr, val, start, midIdx - 1);
  }

  // if value is larger then middle 
  return binarySearch(arr, val, midIdx + 1, end);

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
