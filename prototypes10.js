function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

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

const jen = new Animal("Jen", 10);
const joe = new Animal("Joe", 10);

const prototype = Object.getPrototypeOf(jen);
prototype;
// eat: ƒ (amount)
// play: ƒ (length)
// sleep: ƒ (length)
// constructor: ƒ Animal(name, energy)
// __proto__: Object
prototype === Animal.prototype; // true

for (let key in jen) {
  console.log(`Key: ${key}, Value: ${jen[key]}`);
}
// Key: name, Value: Jen
// Key: energy, Value: 10
// Key: eat, Value: function(amount) {
//   console.log(`${this.name} is eating.`);
//   this.energy += amount;
// }
// Key: sleep, Value: function(length) {
//   console.log(`${this.name} is sleeping.`);
//   this.energy += length;
// }
// Key: play, Value: function(length) {
//   console.log(`${this.name} is playing.`);
//   this.energy -= length;
// }
jen.hasOwnProperty("name"); //true
jen.hasOwnProperty("sleep"); //false
Object.prototype; // The reason jen has access to hasOwnProperty()
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()
for (let key in jen) {
  if (jen.hasOwnProperty(key)) {
    console.log(`Key: ${key}, Value: ${jen[key]}`);
  }
}
// Key: name, Value: Jen
// Key: energy, Value: 10

function Test() {}

jen instanceof Animal; // true

jen instanceof Test; // false
