function User(name, age) {
  this.name = name;
  this.age = age;
}

const user = new User('Andre', 27);

console.log(user);  // { name: 'Andre', age: 27 }