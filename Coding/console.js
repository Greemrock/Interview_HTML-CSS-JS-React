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

// Объяснение:
// console.log(1) - синхронный код
// console.log(10) - синхронный код
// console.log(2) - первый setTimeout (0ms)
// console.log(4) - второй setTimeout (100ms) с reject
// console.log(7) - выполняется catch после reject
// console.log(8) - setTimeout в catch (0ms)
// console.log(9) - значение из последнего Promise
// console.log(5) - третий setTimeout (200ms)
// Важный момент: хотя Promise.all отклоняется при первой ошибке, это не отменяет выполнение setTimeout, которые уже были запланированы. setTimeout создает макрозадачу, которая будет выполнена независимо от состояния Promise.all.
// Это происходит потому что:
// Все setTimeout были запланированы до того, как Promise.all был отклонен
// Отмена Promise.all не отменяет уже запланированные setTimeout
// setTimeout с 200ms выполнится последним, так как у него наибольшая задержка
// Если бы мы хотели предотвратить выполнение console.log(5), нам нужно было бы добавить флаг или использовать AbortController для отмены setTimeout.
