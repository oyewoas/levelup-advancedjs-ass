

// Adition, Subtraction , Multiplication,  Division

const mathPolyfill = function () {};

mathPolyfill.prototype.addition = (value1, value2) => value1 + value2;

mathPolyfill.prototype.division = (value1, value2) => value1 / value2;

mathPolyfill.prototype.multiplication = (value1, value2) => value1 * value2;

mathPolyfill.prototype.subtraction = (value1, value2) => value1 - value2;



const mathPolyfillInstance = new mathPolyfill();

console.log(mathPolyfillInstance.addition(1, 2));

console.log(mathPolyfillInstance.subtraction(1, 2));

console.log(mathPolyfillInstance.division(1, 2));

console.log(mathPolyfillInstance.multiplication(1, 2));


