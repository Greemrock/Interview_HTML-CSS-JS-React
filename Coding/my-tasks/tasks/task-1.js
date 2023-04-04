// "Дана задача, чтo будeт вывeдeнo в кoнсoль:

console.log(1);

setTimeout(() => console.log(2))

Promise.resolve().then(() => console.log(3))

Promise.resolve().then(() => setTimeout(() => console.log(4)))

Promise.resolve().then(() => console.log(5))

setTimeout(() => console.log(6))

console.log(7);

//


const a = new Promise((resolve) => {
  console.log('A');
  resolve('B');
});

setTimeout(() => console.log('C'), 0);

a.then((b) => console.log(b));

const d = () => console.log('D');
d()