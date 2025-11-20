// what is the output of this code
console.log(0.1 + 0.2 === 0.3); // false becoz of floating point precision

// Q: How will you convert this object to a string?
const obj = { a: 1, b: 2 };
console.log(JSON.stringify(obj));
//*  Dont use the toString method on the object as it result into the [object Object]
console.log(obj.toString()); // [object Object]

// Q: Reduce method on the array
const arr = [1, 2, 3, 4];
const reduceMultipliedValue = arr.reduce((acc, curr) => acc * curr, 1);
const reduceAddedValue = arr.reduce((acc, curr) => acc + curr, 0);
console.log(reduceMultipliedValue);
console.log(reduceAddedValue);



