const array = [
    0, 3, 2, 5, 7, 8, 3, 5, 2, 35, 54, 23, 65, 76, 24, 3, 1, 3, 87, 9, -42, -3,
    -6, -10,
  ];
let count = 0;
// O(n*n)
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

console.log(bubbleSort(array));

console.log("count = " + count);
