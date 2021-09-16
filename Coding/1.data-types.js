// null, undefined, boolean, number, string, object, symbol
console.log(typeof 'asd')
console.log(typeof 0)
console.log(typeof undefined) // when no value of a variable or no variable itself
console.log(typeof null)
console.log(typeof true)
console.log(typeof {})
console.log(typeof [])
console.log(typeof Math)
console.log(typeof Symbol( 'JS' ))
console.log(typeof function(){})
console.log(typeof NaN) // this is number 

    // TYPE COERCION - ПРИВЕДЕНИЕ ТИПОВ
// '', false, 0, null, undefined, NaN - Falsy values
console.log(Boolean('')) // - false
console.log(Boolean(0)) // - false
console.log(Boolean('0')) // - true (это все таки строка String)
console.log(Boolean(' ')) // - true (пробел тоже символ)
console.log(Boolean(null)) // - false
console.log(Boolean([])) // - true
console.log(Boolean({})) // - true
console.log(Boolean(function(){})) // - true

let language = 'JS'
if (language) { // convert string to boolean: True (beacuse it is not among falsy values above)
    console.log('the best language is:', language)
}   

    // STRINGS AND NUMBERS - СТРОКИ И ЧИСЛА
console.log(1 + '2') // 12 string
console.log('' + 1 + 0) // 10 string
console.log('' - 1 + 0) // -1 number (при вычислении '' превращается в число)
console.log('3' * '8') // 24 number (string doesn't have * symbol, that's why they are converted into number)
console.log(10 + 4 + 'px') // 14px - string
console.log('px' + 10 + 5) // px105 - string
console.log('42' - 40) // 2 - number
console.log('42px' - 40) // NaN - couldn't convert 'px' into number
console.log(null + 2) // 2 - number (null превращается в 0)
console.log(undefined + 2) // NaN - couldn't convert undefined to number

    // == vs ===
// == пытается сравнить значения с приведением типо - type coercion
// === сравнивать значения как есть - type coercion is switched off
// Better to use always === instead of == 

console.log(2 == '2') // true
console.log(2 === '2') // false
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log('0' == false) // true - 'false' is a falsy value, that's why it is converted to a number as 0
console.log('0' == 0) // true
console.log(0 == 0) // true


    // JUST REMEMBER THEM
console.log(false == '') // true
console.log(false == []) // true
console.log(false == {}) // false - объект тут false

console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false - объект снова false

console.log(0 == []) // true
console.log(0 == {}) // false - и снова наш объектр false
console.log(0 == null) // false
