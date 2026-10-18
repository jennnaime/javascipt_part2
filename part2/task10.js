// Task 10. Increment and assignment operators
// The value of counter changes after every line.

function runTask10() {
  console.log("=== Task 10: Increment and assignment operators ===");

  let counter = 10;
  console.log("Start: " + counter);

  counter++;              // the same as counter = counter + 1
  console.log("After ++: " + counter);

  counter--;              // the same as counter = counter - 1
  console.log("After --: " + counter);

  counter += 5;           // the same as counter = counter + 5
  console.log("After += 5: " + counter);

  counter -= 3;           // the same as counter = counter - 3
  console.log("After -= 3: " + counter);

  counter *= 2;           // the same as counter = counter * 2
  console.log("After *= 2: " + counter);

  counter /= 4;           // the same as counter = counter / 4
  console.log("After /= 4: " + counter);
}
