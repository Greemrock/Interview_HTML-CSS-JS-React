class Animal {}
class Bird extends Animal {
  public fly(): void {}
}

class Fish extends Animal {
  public swim(): void {}
}

class Insect extends Animal {
  public crawl(): void {}
}

class AnimalValidator {
  public static isBird(animal: Animal): animal is Bird {
    return animal instanceof Bird;
  }

  public static isFish(animal: Animal): animal is Fish {
    return (animal as Fish).swim !== undefined;
  }

  public static isInsect(animal: Animal): animal is Insect {
    let isAnimalIsNotUndefinedValid: boolean = animal !== undefined;
    let isInsectValid: boolean = animal instanceof Insect;

    return isAnimalIsNotUndefinedValid && isInsectValid;
  }
}

function move(animal: Animal): void {
  if (AnimalValidator.isBird(animal)) {
    animal.fly();
  } else if (AnimalValidator.isFish(animal)) {
    animal.swim();
  } else if (AnimalValidator.isInsect(animal)) {
    animal.crawl();
  }
}
