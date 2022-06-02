// PROMISES
// основной фишкой промисов является удобство
// console.log("Request Data");
// создается промис с помощью ключевого слова new и класса Promise
// внутрь класса мы передаем callback с двумя параметрами, resolve и reject, которые в свою очередь тоже являются функциями.
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing Data");
    let data = {
      server: "main",
      port: 8000,
      status: "ready",
    }; // получаем, создаём какую-то информацию
    resolve(data); // функция resolve говорит о том, что промис удачно завершился. В него мы можем передавать любые данные
  }, 2000);
});

p.then((gotData) => {
  // метод then буквально переводится как "когда", то есть когда промис удачно завершится, будет совершен callback. А как параметр можно получить параметр из resolve()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      gotData.modified = true;
      resolve(data);
    }, 2000);
  });
})
  .then((data) => {
    console.log("Modified", data);
  })
  .catch((err) => {
    // метод catch задействуется когда в промисе случается ошибка, или используется параметр reject вместо resolve
    console.log("Error: ", err);
  })
  .finally(() => console.log("Finally")); // метод finally задействует в любом случае, независимо от ошибки или успеха

//  // 
// const sleep = (ms) => {
//   // эта функиця sleep возвращает промис который успешно завершится через указанные параметром миллисекунды
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// };

// sleep(2000).then(() => console.log("After 2 seconds")); // ровно через 2 секунды появляется этот консоль лог
// sleep(5000).then(() => console.log("After 5 seconds")); // появится ровно через 5 секунд

// // ALL VS RACE
// Promise.all([sleep(2000), sleep(5000)]) // этот метод берет себе параметром массив промисов и возвращает другой промис
//   .then(() => console.log("All promises")); // этот callback выполнится только тогда, когда все промисы из массива успешна завершатся

// Promise.race([sleep(2000), sleep(5000)]) // тоже получает массив промисов и возвращает другой callback
//   .then(() => console.log("Race promise")); // callback выполнится, когда любой промис из массива завершится удачно
