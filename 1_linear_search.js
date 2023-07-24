const array = [1, 4, 1, 5, 7, 8, 9, 0, 4, 7, 11];
let count = 0;
// O(n)
function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return array[i];
    }
  }
  return null;
}

console.log(linearSearch(array, 7));
console.log(count);
