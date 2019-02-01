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

// when using the new keyword the commented lines are inserted implicitly for you by js
function AnimalWithNew(name, energy) {
  // let this = Object.create(AnimalWithNew.prototype);
  this.name = name;
  this.energy = energy;
  //   return this;
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

AnimalWithNew.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

AnimalWithNew.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

AnimalWithNew.prototype.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

// for each object instance, all methods are being recreated
const jen = Animal("Jen", 10);
const joe = Animal("Joe", 7);

const jenWithNew = new AnimalWithNew("Jen", 10);
const joeWithNew = new AnimalWithNew("Joe", 10);

jenWithNew.play(5);
