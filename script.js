// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a generic sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Dog class extending Animal
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  // Method to bark
  bark() {
    console.log("woof");
  }
}

// Cat class extending Animal
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  // Method to purr
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;


