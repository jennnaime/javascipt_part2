// Task 12. Functions
// A parameter is the name inside the parentheses of the function.
// An argument is the real value we pass when we call the function.
// return sends a value back to the place where the function was called.

// This function returns nothing, it just prints a message
function greetUser(name) {
  console.log("Hello, " + name + "! Welcome to JavaScript.");
}

// This function returns a number
function calculateSum(a, b) {
  return a + b;
}

// This function also returns a number
function calculateRectangleArea(width, height) {
  return width * height;
}

function runTask12() {
  console.log("=== Task 12: Functions ===");

  // First set of arguments
  greetUser("Aisha");
  console.log("Sum of 12 and 5 is " + calculateSum(12, 5));
  console.log("Area of 5 x 4 is " + calculateRectangleArea(5, 4));

  // Second set of arguments
  greetUser("Anel");
  console.log("Sum of 100 and 250 is " + calculateSum(100, 250));
  console.log("Area of 10 x 3 is " + calculateRectangleArea(10, 3));

  // A function without return gives undefined
  console.log("greetUser returns:", greetUser("Merey"));
}
