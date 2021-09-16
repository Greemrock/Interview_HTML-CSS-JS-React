// function Cat(color, name) {
//     this.color = color
//     this.name = name
// }

// const cat = new Cat('black', 'кот') // создали новый инстанс класса Cat
// console.log(cat) // Cat { color: 'black', name: 'кот' }


// СОЗДАТЬ СВОЁ КЛЮЧЕВОЕ СЛОВО new
// function MyNew(constructor, ...args) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype) // с помощью метода Класса Object, для нашего объекта устанавливаем свой конструктор.
//     return constructor.apply(obj, args) || obj // возвращаем и вызываем переданный нами конструктор с аргументами
// }

// const cat = MyNew(Cat, 'black', 'Tom');
// console.log(cat)