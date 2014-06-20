/*
 * User.js
 */

// Private
var userCount = 0;

function depositeMinusFee(num1) {
  return num1 - 0.1;
}


// Public
module.exports = User;

function User(n) {
    this.id = userCount;
    this.name = n;
    this._paid = false;
    this.balance = 0;
    userCount++;
}

User.prototype.togglePaid = function() {
  this._paid = !this._paid;
};

User.prototype.userType = function() {
  if(this._paid) return 'Paid User';
  else           return 'Free User';
};

User.prototype.addBalance = function(amount) {
  this.balance += depositeMinusFee(amount);
};



/*
 * app.js
 */
var User = require('./User');
var bob = new User('Bob');
var joe = new User('Joe');
console.log(bob.id);         // 0
console.log(joe.id);         // 1
console.log(bob.balance);    // 0
bob.addBalance(100);
console.log(bob.balance);    // 99.9
console.log(bob._paid);      // false (_paid is private; DON'T DO THIS!)
bob.togglePaid();
console.log(bob.userType()); // 'Paid User'
console.log(joe.userType()); // 'Free User'
