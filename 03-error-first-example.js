// The Asyncronous Method
function strictAddition(x, y, callback) {
  if(typeof x !== 'number') {
    callback( new Error('First argument is not a number') );
    return;
  }
  if(typeof y !== 'number') {
    callback( new Error('Second argument is not a number') );
    return;
  }
  var result = x + y;
  setTimeout(function() {
    callback(null, result);
  }, 500);  
}

// The Callback
function callback(err, data) {
  if(err) {
    console.log(err);
    return;
  }
  console.log(data);
}


// Examples
strictAddition(2,  10, callback); // 12
strictAddition(-2, 10, callback); // 8
strictAddition('uh oh', 10, callback); // Error = "First argument is not a number"
strictAddition(2, '10', callback); // // Error = "Second argument is not a number"


// Async Example - all calls made in parallel
async.parallel({
    twelve: function(callback){ strictAddition(2, 10, callback); },
    fiftythree: function(callback){ strictAddition(42, 11, callback); },
    six: function(callback){ strictAddition(23, -17, callback); },
},
function(err, results) {
  if(err) {
    console.log(err);
    return;
  }
  console.log(results); // {twelve: 12, fiftythree: 53, six: 6}
});

