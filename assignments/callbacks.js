// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(list.length);
}

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, (LengthOfList) => {
  console.log(LengthOfList);
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

function lastItem(arr, cb) {
  return cb(arr.slice(-1)[0]);
}

lastItem(items, function(last) {
  console.log(last)
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

const x = 1
const y = 2

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(x, y, function(sum) {
  console.log(sum)
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

const a = 4
const b = 8

function multiplyNums(a, b, cb) {
  return cb(a * b);
}

multiplyNums(a, b, function(sum) {
  console.log(sum)
});



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function contains(item, list, cb) {
  return cb(list, item);
}

const testForItems = function(list, item) {
  return list.includes(item);
}

console.log(contains('Pencil', items, testForItems));
/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }
