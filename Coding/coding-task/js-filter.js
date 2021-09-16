/* Реализуйте функцию filter как у массива */

function filter(arr, condition) {
  return arr.filter(condition);
}

const result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], (n) => n % 2);

console.log(result); // [ 1, 3, 5, 7, 9 ]