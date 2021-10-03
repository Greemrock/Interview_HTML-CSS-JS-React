// function checkBrackets(string) {
//   const arr1 = []; 
//   const arr2 = [];

//   for (const word of string) {
//     if (word === '(') {
//       arr1.push(word);
//     } else {
//       arr2.push(word);
//     }
//   }

//   if (arr1.length === arr2.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// or

function checkBrackets(string) {
  const openedBrackets = "( [ {";
  const closedBrackets = ") ] }";

  let compared = string.split('').reduce((acum, value) => {
    if (openedBrackets.includes(value)) return acum + 1;
    if (closedBrackets.includes(value)) return acum - 1;
  }, 0)
  return !compared;
}

//or

// function checkBrackets(string) {
//   const stack = []; 

//   for (const word of string) {
//     if (word === '(') {
//       stack.push(word);
//     } else {
//       const lastEl = stack.pop(word);
//       if (!lastEl) {
//         return false;
//       }
//     }
//   }

//   if (stack.length) {
//     return false;
//   } else {
//     return true;
//   }
// }

const a = checkBrackets("((((()))))");

console.log(a);