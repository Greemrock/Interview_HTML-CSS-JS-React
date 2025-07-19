// "Дана задача, чтo будeт вывeдeнo в кoнсoль:

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

//

// const a = new Promise((resolve) => {
//   console.log("A");
//   resolve("B");
// });

// setTimeout(() => console.log("C"), 0);

// a.then((b) => console.log(b));

// const d = () => console.log("D");
// d();

//

let a;
let p4 = new Promise(function (resolve) {
  console.log("TEST A1", a);
  a = 25;
  setTimeout(() => {
    console.log("TEST A2", a);
    resolve(a);
  }, 100);
});
setTimeout(function timeout() {
  a = 10;
  console.log("TEST A3", a);
}, 100);
p4.then(function (b) {
  console.log("TEST A4", a);
});
console.log("TEST A5", a);

