class Dog {
  constructor(name){
      this.name = name;
  }


  eat(food){
      food.forEach(function(item) {
          console.log(`${this.name} is eating ${item}`)
      });
  }
}

const bim = new Dog('Bim');
bim.eat(['bone', 'cookie']) // ???
