    // CLOSURE - ЗАМЫКАНИЯ
// Замыкания это в целом когда функция имеет доступ к переменным вышестоящего Scope
// function sayHelloTo(name) {
//     const message = "Hello " + name

//     return function() {
//         console.log(message) // отразится message, потому что это функиця находится внутри первой и имеет доступ к ее переменным
//     }
// }

// const helloToElena = sayHelloTo('Elena')
// console.log(helloToElena) // [Function] - потому что мы ее не вазвали
// console.log(helloToElena()) // Hello Elena


// Практическое применение
// function createFrameworkManage() {
//     const frameworks = ['Angular', 'React']
//     return {
//         print: function() {
//             console.log(frameworks)
//         },
//         add: function(framework) {
//             frameworks.push(framework)
//         }
//     }
// }
// const manager = createFrameworkManage()
// console.log(manager) // { print: [Function: print], add: [Function: add] }
// // console.log(frameworks) // error: переменная объявлена внутри другого скоупа поэтому недоступна
// manager.print() // ['Angular', 'React']
// manager.add('Vue') // Добавляем новый элемент
// manager.print() // ['Angular', 'React', 'Vue']


    // SETTIMEOUT
const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
    // setTimeout(function() {
    //     console.log(`fib[${i}] = ${fib[i]}`) // fib[6] = undefined - можно исправить просто поменяв var На let, либо смотрим вниз
    // }, 1500);
    (function(j) {
        setTimeout(() => {
            console.log(`fib[${j}] = ${fib[j]}`) // fib[0] = 1,  fib[1] = 2, fib[2] = 3, fib[3] = 5, fib[4] = 8, fib[5] = 13
        }, 1500);
    })(i)
}