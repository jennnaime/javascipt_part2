// Task 7. Input and a greeting
// prompt() asks the user for a value, alert() shows a message

function runTask7() {
  console.log("=== Task 7: Input and a greeting ===");

  let name = prompt("What is your name?");
  console.log("The user entered:", name);

  // If the user presses Cancel, prompt() returns null
  if (name === null || name === "") {
    name = "student";
  }

  // 1. alert() shows a greeting in a popup window
  alert("Hello, " + name + "!");

  const group = "MT-2506";

  // 2. Joining strings with + is called concatenation
  const greetingOne = "My name is " + name + " and my group is " + group;
  console.log(greetingOne);

  // 3. A template literal does the same thing with dollar and curly brackets
  const greetingTwo = `My name is ${name} and I study in group ${group}`;
  console.log(greetingTwo);
}
