// Base class Animal
class Animal {
  constructor(species) {
    this._species = species;
  }
  
  // Getter for species
  get species() {
    return this._species;
  }
  
  // Method to make sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Subclass Cat extends Animal
class Cat extends Animal {
  // Method specific to Cat
  purr() {
    console.log("purr");
  }
}

// Subclass Dog extends Animal
class Dog extends Animal {
  // Method specific to Dog
  bark() {
    console.log("woof");
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof




