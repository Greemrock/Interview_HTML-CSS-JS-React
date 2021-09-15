/*

Реализуйте функцию, которая возвращает длину последнего слова 
переданной на вход строки. 
Словом считается любая последовательность, не содержащая пробелов.

*/

function getLastWordLength(sentence) {
  const arr = sentence.trim().split(" ");
  const length = arr.length - 1;
  return arr[length].length;
}

console.log(getLastWordLength("")); // 0
console.log(getLastWordLength("man in BlacK")); // 5
console.log(getLastWordLength("hello, world!  ")); // 6
