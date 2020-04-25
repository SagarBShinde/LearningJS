
// Declaration types
  // var, let, const

// // Init var
// var greeting;  --- Value of uninitialized variable is undefined.
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);



/* Rules for naming variable
  1. letters, numbers, _, $
  2. Can not start with number
*/

/* naming convetions
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname;
*/

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


// CONST 
// CONST variables cannot be reassigned.
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

// if a object reference is declared as const then we cannot reassign the referebce however object properties 
// like name and age here, can mutate () change
// uncomment and chaeck
//  const person = {
//    name: 'John',
//    age: 30
// }
// //  this is valid
// // person.name = 'Sara';
// // person.age = 32;

// // console.log(person);

// const person = {a: "test"}

// //same rule apply to arrays. values can change however numbers arrats cannot be reassigned

// const numbers = [1,2,3,4,5];
// numbers.push(6);

// console.log(numbers);