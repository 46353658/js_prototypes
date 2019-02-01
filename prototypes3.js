const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
};

function Animal(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;
  // create references
  animal.eat = animalMethods.eat;
  animal.sleep = animalMethods.sleep;
  animal.play = animalMethods.play;
  return animal;
}

// for each object instance, all methods are being recreated
const jen = Animal("Jen", 10);
const joe = Animal("Joe", 7);
