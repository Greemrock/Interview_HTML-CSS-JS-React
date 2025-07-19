// null, undefined, boolean, number, string, object, symbol
console.log(typeof "asd");
console.log(typeof 0);
console.log(typeof undefined); // when no value of a variable or no variable itself
console.log(typeof null);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof Math);
console.log(typeof Symbol("JS"));
console.log(typeof function () {});
console.log(typeof NaN); // this is number

// TYPE COERCION - ПРИВЕДЕНИЕ ТИПОВ
// '', false, 0, null, undefined, NaN - Falsy values
console.log(Boolean("")); // - false
console.log(Boolean(0)); // - false
console.log(Boolean("0")); // - true (это все таки строка String)
console.log(Boolean(" ")); // - true (пробел тоже символ)
console.log(Boolean(null)); // - false
console.log(Boolean([])); // - true
console.log(Boolean({})); // - true
console.log(Boolean(function () {})); // - true

let language = "JS";
if (language) {
  // convert string to boolean: True (beacuse it is not among falsy values above)
  console.log("the best language is:", language);
}

// STRINGS AND NUMBERS - СТРОКИ И ЧИСЛА
console.log("2" + 1);
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log("3" * "8");
console.log(10 + 4 + "px");
console.log("px" + 10 + 5);
console.log("42" - 40);
console.log("42px" - 40);
console.log(null + 2);
console.log(undefined + 2);

// == vs ===

console.log(2 == "2");
console.log(2 === "2");
console.log(undefined == null);
console.log(undefined === null);
console.log("0" == false);
console.log("0" == 0);
console.log(0 == 0);

// JUST REMEMBER THEM
console.log(false == ""); // true
console.log(false == []); // true
console.log(false == {}); // false - объект тут false

console.log("" == 0); // true
console.log("" == []); // true
console.log("" == {}); // false - объект снова false

console.log(0 == []); // true
console.log(0 == {}); // false - и снова наш объектр false
console.log(0 == null); // false

console.log(1);

Promise.all([
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve(3);
    }, 0);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(4);
      reject("error");
    }, 100);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(5);
      resolve(6);
    }, 200);
  }),
])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(7);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(8);
        resolve(9);
      }, 0);
    });
  })
  .then((value) => {
    console.log(value);
  });

console.log(10);

