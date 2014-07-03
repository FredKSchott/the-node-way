/*
 * a-singleton.js
 */
 
// Private
var x = require('x');
var y = 'I am private';
var z = true;

function sum(num1, num2) {
  return num1 + num2;
}


// Public
var self = module.exports = {

  someProperty: 'I am public',
  
  addFive: function addFive(num) {
    return sum(num, 5);
  },
  
  toggleZ: function toggleZ() {
    return z = !z;
  }
  
};



/*
 * app.js
 */
 var singleton = require('./a-singleton');
 console.log(singleton.x); // undefined (x is private)
 console.log(singleton.sum(1,2)); // undefined (sum is private)
 console.log(singleton.someProperty); // 'I am public'
 console.log(singleton.toggleZ()); // false 
 console.log(singleton.toggleZ()); // true (public functions can still reference private variables)

