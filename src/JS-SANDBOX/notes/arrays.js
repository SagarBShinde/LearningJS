// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end
 numbers.push(250);
// // Add on to front
 numbers.unshift(120);
// // Take off from end
 numbers.pop();
// // Take off from front
 numbers.shift();
// // Splice values- removes values at the gives indices range 
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
 numbers.splice(1,3);

 const months = ['Jan', 'March', 'April', 'June'];
 months.splice(1, 0, 'Feb');
 // inserts at index 1
 console.log(months);
 // expected output: Array ["Jan", "Feb", "March", "April", "June"]
 
 months.splice(4, 1, 'May');
 // replaces 1 element at index 4
 console.log(months);
 // expected output: Array ["Jan", "Feb", "March", "April", "May"]




 // Reverse
 numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// The callback function expects 3 values greater than, 0 and less than to decice object equality hence subtraction is used
 val = numbers.sort(function(x, y){
  return x - y;
 });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function over50(num){
  return num > 50;
}

// Find also takes a callback function
val = numbers.find(over50);

console.log(numbers);
console.log(val);
