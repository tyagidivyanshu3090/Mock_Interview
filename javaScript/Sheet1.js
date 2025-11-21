// ? Q1: What is the output of this floating point operation?
console.log(0.1 + 0.2 === 0.3);
// * Answer: false (due to floating point precision)

// ---------------------------------------------------------

// ? Q2: How will you convert this object to a string?
const obj = { a: 1, b: 2 };
console.log(JSON.stringify(obj));

// ! WARNING: Don't use the toString() method on a plain object!
// * It results in "[object Object]" which is not useful data.
console.log(obj.toString());

// ---------------------------------------------------------

// ? Q3: How do you use the Reduce method for math operations?
const arr = [1, 2, 3, 4];

// * Logic: Accumulate multiplication starting at 1
const reduceMultipliedValue = arr.reduce((acc, curr) => acc * curr, 1);

// * Logic: Accumulate addition starting at 0
const reduceAddedValue = arr.reduce((acc, curr) => acc + curr, 0);

console.log("Multiplied:", reduceMultipliedValue);
console.log("Added:", reduceAddedValue);

// ---------------------------------------------------------

// ? Q4: How do you access a character from a particular index?
let string = "Hello";

console.log(string[0]); // * Preferred method (Modern)
console.log(string.charAt(0)); // * Alternative method

// ---------------------------------------------------------

// ? Q5: How does the indexOf method work?
const sentence = "Hello World";

// * 1. Basic Search
console.log(sentence.indexOf("World")); // Output: 6

// ! Note: This is Case Sensitive!
console.log(sentence.indexOf("world")); // Output: -1

// * 2. Finding a character
console.log(sentence.indexOf("o")); // Output: 4 (Finds the first 'o')

// ---------------------------------------------------------

// ? Q: NaN problem in indexOf method
const arr1 = [1, 2, NaN];
console.log(arr1.indexOf(NaN)); // Output: -1 (Failed!)
console.log(arr1.includes(NaN)); // Output: true (Success! .includes is smarter here)


