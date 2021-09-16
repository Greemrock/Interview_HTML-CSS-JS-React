const players = [
    {name: "Messi", age: 33, money: 145000},
    {name: "Ronaldo", age: 35, money: 140000},
    {name: "Haaland", age: 21, money: 100000},
    {name: "Neymar", age: 30, money: 80000},
]



// FOREACH
// forEach не создает новый массив, а преобразует этот
// players.forEach((player, index, playersArr) => {
//     console.log(player); // взаимодействуем с каждым элементом
//     console.log(index); // можем использовать индекс каждого элемента
//     console.log(playersArr);
// })



// MAP
// основная разница между map и forEach в том, что map создаем новый массив, а не преобразовывает нынешний 
// const newPlayers = players.map(player => {
//     return player
// })
// console.log(newPlayers);



// FILTER
// сначала попробуем с for loop

// const olds = []
// for (let i = 0; i < players.length; i++) {
//     if (players[i].age >= 30) {
//         olds.push(players[i])
//     }
// }
// console.log(olds); // [
//     // { name: 'Messi', age: 33 },
//     // { name: 'Ronaldo', age: 35 },
//     // { name: 'Neymar', age: 30 }
// // ] - отсортировали по возрасту, но это получилось долго

// // Теперь непосредственно сам filter
// const olds = players.filter(player => player.age >= 30) // более коротко
// console.log(olds);


// REDUCE
// создает новый массив
// первый параметр - callback, у callback также 2 параметра
    // - total - окончательный результат
    // - player - каждый элемент
// второй параметр - начальное состояние, с какого числа начинать
// const howMuch = players.reduce((total, player) => total + player.money, 0)
// console.log(howMuch) // 465000