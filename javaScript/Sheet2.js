/*
    1. setTimeout @ 3 syntax -> 3rd syntax is mentioned in point 2
    2. setTimeout with parameters 
    3. setTimeout with clearTimeout. [ setTimeout returns a unique id ]
    
*/
// ---------------------------------------------------------
// ? Q1: setTimeout @ 3 syntax

// * Ans: Style 1: The Arrow Function (Most Common)
setTimeout(() => {
  console.log("I run after 3 seconds");
}, 3000);

// * Ans: Style 2: The Named Function
function myCallback() {
  console.log("I run after 3 seconds");
}
setTimeout(myCallback, 3000); // ! Dont call the function here

// ---------------------------------------------------------
// ? Q2: setTimeout with parameters
function greet(name, age) {
  console.log(`Hello ${name}, you are ${age}`);
}

// Syntax: Function, Delay, Arg1, Arg2
setTimeout(greet, 2000, "Alice", 25);
// Output after 2s: "Hello Alice, you are 25"

// ---------------------------------------------------------

// ? Q3: setTimeout with clearTimeout. [ setTimeout returns a unique id ]
const timeoutId = setTimeout(() => {
  console.log("This will not run!");
}, 3000);

// Clear the timeout
clearTimeout(timeoutId);
console.log("Timeout cancelled");

// ---------------------------------------------------------
