/* What is a prototype in javascript?
    A prototype is just a property that every function you create in javascript has,
    that points to an object */

// constructor function
function Animal(name, energy) {
  // Using Object.create to delegate failed lookups to Animal.prototype
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.energy = energy;
  // Without this line we would never get the object we created
  return animal;
}

// adding methods to the constructor method's prototype
Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal.prototype.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

// for each object instance, all methods are being recreated
const jen = Animal("Jen", 10);
const joe = Animal("Joe", 7);

console.log(joe.name);
console.log(joe.energy);
joe.play(5);
console.log(joe.energy);
