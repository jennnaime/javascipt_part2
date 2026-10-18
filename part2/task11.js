// Task 11. A calculation from the lecture
// humanAge = (dogAge - 2) * 4 + 21

function runTask11() {
  console.log("=== Task 11: Dog age to human age ===");

  // First test with dogAge = 2
  const dogAge = 2;
  const humanAge = (dogAge - 2) * 4 + 21;
  console.log("A dog that is " + dogAge + " years old is about " + humanAge + " in human years.");

  // Second test with dogAge = 5
  const dogAgeTwo = 5;
  const humanAgeTwo = (dogAgeTwo - 2) * 4 + 21;
  console.log("A dog that is " + dogAgeTwo + " years old is about " + humanAgeTwo + " in human years.");

  console.log("dogAge 2 gives 21 and dogAge 5 gives 33.");
}
