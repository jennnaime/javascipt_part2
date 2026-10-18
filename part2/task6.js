// Task 6. Variables and data types
// let   = the value can change later
// const = the value cannot be reassigned

function runTask6() {
  console.log("=== Task 6: Variables and data types ===");

  const fullName = "Aisha Zhussupova";   // string
  let age = 19;                          // number
  const isStudent = true;                // boolean
  const favouriteColour = "pink";        // string

  // typeof shows the type of the value
  console.log("Full name:", fullName, "| type:", typeof fullName);
  console.log("Age:", age, "| type:", typeof age);
  console.log("Student:", isStudent, "| type:", typeof isStudent);
  console.log("Favourite colour:", favouriteColour, "| type:", typeof favouriteColour);

  // let can be reassigned
  age = 20;
  console.log("Age after reassignment:", age);

  // const cannot be reassigned:
  // favouriteColour = "blue";  // this line would throw a TypeError
  console.log("favouriteColour stays", favouriteColour, "because it is const.");
}
