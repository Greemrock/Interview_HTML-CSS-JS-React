// Каждый объект имеет прототип, унаследованный от родительского объекта, от которого он был создан

// __proto__
// в прошлом в ES5 Object.getPrototypeOf()

function Cat(name, color) {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} says Myau`); // таким образом мы для класса Cat добавляем новый функционал как voics
}
const cat = new Cat('Tom', 'orange')
console.log(Cat.prototype) // Cat { voice: [Function] }
console.log(cat.__proto__) // Cat { voice: [Function] }
console.log(cat) // Cat { name: 'Tom', color: 'orange' }
cat.voice() // Cat Tom says Myau


// ================
function Person() {

}

Person.prototype.legs = 2;
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'ShaXx'
console.log('skin' in person) // true - оператор in проверяет есть ли такое свойство в объекте или в его прототипе
console.log(person.legs); // 2
console.log(person.name); // ShaXx
console.log(person.eyes) // undefined

console.log(person.hasOwnProperty('legs')); // false - так как у самого объекта нету свойства legs, оно существует только в прототипе объекта
console.log(person.hasOwnProperty('name')); // true - такое свойство есть