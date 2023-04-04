const person = {
  name: "John",
  sayName: () => {
    console.log(`Hi! Me name is ${this.name}`);
  },
};

person.sayName();
// ???
// 'undef'

const person = {
  name: "John",
  sayName() {
    console.log(`Hi! Me name is ${this.name}`);
  },
};

person.sayName();
// ???
// 'John'

///////////////////////////////////
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName = () => {
    console.log(`Hi! Me name is ${this.name}`);
  };
}

const john = new Person("John");
john.sayName();
// ???
// 'John'
