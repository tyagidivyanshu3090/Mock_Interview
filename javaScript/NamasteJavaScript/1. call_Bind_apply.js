// ? Q: Understand the difference between call

// let printFullName = function () {
//   console.log(this.firstname + " " + this.lastname);
// };

// let person = {
//   firstname: "Akshay",
//   lastname: "Saini",
// };

// let employee = {
//   firstname: "Divyanshu",
//   lastname: "Tyagi",
// };

// // Printing the name
// printFullName.call(employee); //Divyanshu Tyagi
// printFullName.call(person); //Akshay Saini

// -----------------------------------------------------------------

// ? Q:  call method with parameters

let printFullName = function (homeTowm, state) {
  console.log(
    `${this.firstname} ${this.lastname} from ${homeTowm} which is in ${state}`
  );
};

let person = {
  firstname: "Akshay",
  lastname: "Saini",
};

printFullName.call(person, "sarita vihar", "Delhi");

// -----------------------------------------------------------------

// ? Q:  apply method with parameters:
// Syntax: function.apply(thisArg, [argsArray]) -> same as the call only difference is how argument is passed

printFullName.apply(person, ["Chandigarh", "Punjab"]);

// -----------------------------------------------------------------
// ? Q:  bind method with parameters
//The bind() Method:  He introduces bind as the method that creates a copy of the function.

let printingName = printFullName.bind(person, "Mumbai", "Maharashtra");
printingName();
