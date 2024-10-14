// Animal Class
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

// Cat Class extending Animal
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  // Method to purr
  purr() {
    console.log("purr");
  }

  // Optionally, override makeSound if you want a specific cat sound
  // makeSound() {
  //   console.log(`${this.species} says meow`);
  // }
}

// Dog Class extending Animal
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  // Method to bark
  bark() {
    console.log("woof");
  }

  // Optionally, override makeSound if you want a specific dog sound
  // makeSound() {
  //   console.log(`${this.species} says bark`);
  // }
}

// Example Usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof

