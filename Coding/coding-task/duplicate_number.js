// const duplicateNumber = (array) => {
//   const uniqueValue = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let count = 0;

//     for (let j = 0; j < array.length; j++) {
//       if (element === array[j]) {
//         count++;
//       }
//     }
//     if (count === 1) {
//       uniqueValue.push(element);
//     }
//   }
//   return uniqueValue; // O(n*N)
// } 

// or

const duplicateNumber = (array) => {
  const obj = {};
  const uniqueValue = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (!(element in obj)) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }

  }

  const keys = Object.keys(obj);

  keys.forEach(key => {
    if (obj[key] === 1) {
      uniqueValue.push(key);
    }
  })
  return uniqueValue; // O(N)
}

const a = duplicateNumber([1,2,3,3,4,5,5,6,6,8,9,9]); 

console.log(a); // => [1,2,4,8] 