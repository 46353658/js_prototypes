const Animal = () => {};

const jen = new Animal(); // Uncaught TypeError, new keyword not compatible with arrow functions

Animal.prototype; // undefined
