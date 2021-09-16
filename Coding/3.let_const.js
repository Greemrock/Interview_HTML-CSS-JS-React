    // LET
// variables that we can reassign in the future

let a = 'variable a'
let b = 'variable b'

// // снизу block scope, блок со своим отдельным скоупом. Появился в ES6
{
    a = 'New variable A'
    let b = 'Local variable B'
    console.log('Scope A: ', a) // New variable A
    console.log('Scope B: ', b) // Local variable B
    // console.log('Scope C: ', c) // throws an error, because we are trying to use a let variable before creating it
    // let c = 'Local variable C'
}
console.log('A:', a) // New variable A
console.log('B:', b) // variable b


    // CONST
// const port = 8080
// port = 8080 // error: we cannot reassign const, мы не можем переопределить константу

// const array = ['JS', 'is', 'Awesome']
// array.push('!') // сработает, потому что мы не меняем ссылку, массив тот же, только содержимое другое
// array[0] = 'Javascript' // Тоже самое
// console.log(array) // [ 'Javascript', 'is', 'Awesome', '!' ]
// // array = '' // уже не сработает, мы пытаемся изменить сам массив полностью