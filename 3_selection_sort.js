const array = [
    0, 3, 2, 5, 7, 8, 3, 5, 2, 35, 54, 23, 65, 76, 24, 3, 1, 3, 87, 9, -42, -3,
    -6, -10,
  ];
let countJ = 0;
let countI = 0;
console.log("unsoreted = ", array, "\n");

// O(n*log2n)
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    countI += 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      countJ += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(array));
console.log("count I = ", countI);
console.log("count J = ", countJ);
console.log("length = ", array.length);

// length/2 *
