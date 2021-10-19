// var
console.log(i) // undefined - потому что переменная var всплывает наверх и обявляется в самом начале, но без значения
var i = 52
console.log(i) // 52


// let, const
console.log(sum) // throws an error - because variables let and const aren't affected by hoisting
let sum = 42
console.log(sum) // 42

// FUNCTION DECLARATION
console.log(sum(1, 2)) // 3 - потому что функция sum всплывает наверх и объявляется в самом начале

function sum(a, b) {
    return a + b
} 

// FUNCTION EXPRESSION
console.log(square(5)) // returns an error, функиця square объявлена с помощью переменной, в таком случае на такую функция hoisting не действует

var square = function(num) {
    return num ** 2
}