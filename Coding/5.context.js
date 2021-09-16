const person = {
    surname: 'Stark',
    knows: function(what, name) {
        console.log(`Ты ${what} знаешь ${name} ${this.surname}`);
    }
}

const john = {surname: 'Сноу'} // создаем другой объект, значит и другой контекст

person.knows('Все', 'Бран') // вызываем метод объекта
person.knows.call(john, 'ничего не', 'Джон') // моментально вызываем метод объекта person в контексте объекта john. Первым передается новый контекст, а дальше уже нужные для вызова метода аргументы
person.knows.apply(john, ['ничего не', 'Джон']) // то же самое что и call, отличие в том что дополнительные аргументы передаются в массиве
person.knows.call(john, ...['ничего не', 'Джон']) // вызываем с помощью оператора spread
const bound = person.knows.bind(john, 'ничего не', 'Джон') // точно такой как и call, только bind не вызывает функцию а возвращает её
bound()


    // Классы с помощью function
// function Person(name, age) {
//     this.name = name // в этом контекстке присваиваем к свойству name Значение 'name' которое мы передаем при создании нового инстанса этого класса
//     this.age = age

//     console.log(this); // this тут равно нашему новому объекту elena
// }

// const elena = new Person('Elena', 20)

    // ЯВНЫЙ
// function logThis() {
//     console.log(this)
// }

// const obj = {num: 52}

// logThis.call(obj) // { num: 52 } - вызываем нашу функцию в контексте нашего объекта obj
// logThis.apply(obj) // { num: 52 } - тут тоже самое
// logThis.bind(obj)() // { num: 52 } - результат такой же, но так как bind Нам возвращает функцию, нам пришлось её вызвать


// НЕЯВНЫЙ
// const animal = {
//     legs: 4,
//     logThis: function() {
//         console.log(this);
//     }
// }

// animal.logThis() // { legs: 4, logThis: [Function: logThis] } - так как мы создали новый объект с собственным контекстом, и прямо его же контекст и вызвали


    // СТРЕЛОЧНЫЕ ФУНКЦИИ
// В стрелочной функции нет контекста
// Основная разница между конструктором function И стрелочной функцией - это то, что конструктор function создает для функции свой контекст, а у стрелочной его нет.

// function Cat(color) {
//     this.color = color;
//     console.log('This: ', this);
//     (() => {
//         console.log('Arrow this: ', this) // можно увидет, что оба this Одинаковы.
//     })()
// }

// new Cat('red')