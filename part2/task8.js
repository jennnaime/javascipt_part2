// Task 8. Sum and arithmetic
// prompt() always returns a string, so we convert it with Number()

function runTask8() {
  console.log("=== Task 8: Sum and arithmetic ===");

  const first = Number(prompt("Enter the first number:", "12"));
  const second = Number(prompt("Enter the second number:", "5"));

  console.log("First number:", first, "| type:", typeof first);
  console.log("Second number:", second, "| type:", typeof second);

  console.log("Sum: " + (first + second));
  console.log("Difference: " + (first - second));
  console.log("Product: " + (first * second));
  console.log("Quotient: " + (first / second));
  console.log("Remainder: " + (first % second));

  // Why "12" + "5" is "125": with strings + joins them together
  console.log('Text "12" + "5" gives: ' + ("12" + "5"));

  // Why 12 + 5 is 17: with numbers + adds them
  console.log("Numbers 12 + 5 give: " + (12 + 5));
}
