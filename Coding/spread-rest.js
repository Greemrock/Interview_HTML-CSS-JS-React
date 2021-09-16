const citiesUzb = ["Tashkent", "Urgench", "Samarkand", "Bukhara"];
const citiesEurope = ["Moscow", "London", "Paris", "Berlin"];

const citiesUzbWithPopulation = {
  Tashkent: 20,
  Urgench: 15,
  Samarkand: 10,
  Bukhara: 5,
};
const citiesEuropeWithPopulation = {
  Moscow: 20,
  London: 15,
  Paris: 5,
  Berlin: 10,
};

// SPREAD

// console.log(citiesUzb); // получаем массив объявленный в начале
// console.log(...citiesUzb); // получаем не массив, а все элементы из массива

// можно копировать массивы
// const dulicateUzb = [...citiesUzb]; // получаем массив объявленный в начале, но это уже абсолютно другой массив с другой ссылкой
// const allCities = [...citiesUzb, ...citiesEurope]; // получаем новый массив, состоящий из элементов двух изначальных массивов

// const dublicatePopulation = { ...citiesUzbWithPopulation }; // можно таким образом скопировать объектр с новой ссылкой
// const allCititesPopulation = {
//   ...citiesUzbWithPopulation,
//   ...citiesEuropeWithPopulation,
// }; // объединяем несколько объектов в один, если в объектах присутствуют одинаковые ключи с разными значениями, то последнее значение передадится в новый

// Practice
// const numbers = [1, 2, 3, 4, 52, 123];
// console.log(Math.max(1, 2, 3, 4, 52, 123)); // возвращает максимальное число
// console.log(Math.max(numbers)); // это не сработает, так как в функцию max нельзя передавать массив
// console.log(Math.max(...numbers)); // в таком случае мы можем просто развернуть массив таким образом

// REST
// function sum(a, b, ...others) {
//   // ...others собирает все остальные параметры в один массив
//   return a + b + others.reduce((total, num) => total + num, 0);
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sum(numbers));

// const [a, b] = numbers; // получаем [1, 2]
// const [a, b, ...rest] = numbers; // получаем [1,2, [3, 4, 5]]
