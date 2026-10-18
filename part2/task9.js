// Task 9. Strings
// .length is a property, so it has no parentheses
// .toUpperCase(), .toLowerCase(), .slice() are methods, so they use parentheses

function runTask9() {
  console.log("=== Task 9: Strings ===");

  const fullName = "Aisha Zhussupova";

  console.log("Full name:", fullName);
  console.log("Length:", fullName.length);
  console.log("Uppercase:", fullName.toUpperCase());
  console.log("Lowercase:", fullName.toLowerCase());
  console.log("First three characters:", fullName.slice(0, 3));

  // Combining two separate strings into one sentence
  const firstPart = "MacBook";
  const secondPart = "Neo";
  const sentence = firstPart + " " + secondPart + " is a new laptop from Apple.";
  console.log(sentence);

  // The same sentence built with a template literal
  const sentenceTwo = `${firstPart} ${secondPart} comes in four colours.`;
  console.log(sentenceTwo);
}
