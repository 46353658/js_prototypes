function Animal(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;

  animal.eat = function(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  };

  animal.sleep = function(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  };

  animal.play = function(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  };
  return animal;
}

// for each object instance, all methods are being recreated
const jen = Animal("Jen", 10);
const joe = Animal("Joe", 7);
