// Currying using the bind method
function multiply(x, y) {
  return x * y;
}

let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(5)); // 10

// Currying using the closure

