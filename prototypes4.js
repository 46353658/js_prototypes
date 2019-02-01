// delegate any failed lookups to animalMethods

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
  //let animal = {};
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;
  return animal;
}

// for each object instance, all methods are being recreated
const jen = Animal("Jen", 10);
const joe = Animal("Joe", 7);

console.log(jen.name);
console.log(jen.energy);
jen.play(5);
console.log(jen.energy);
