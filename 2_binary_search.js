const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

// O(log2n)
function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let posititon = -1;
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      posititon = middle;
      return posititon;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return posititon;
}

//
function recursiveBinarySearch(array, item, start, end) {
  count += 1;
  let middle = Math.floor((start + end) / 2);
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, 0, middle - 1);
  }
  if (item > array[middle]) {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinarySearch(array, 10, 0, array.length));
console.log("count = ", count);
