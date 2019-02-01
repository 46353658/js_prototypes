let animal = {};
animal.name = "Jen";
animal.energy = 10;
animal.eat = function(amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
