// 1. GLOBAL
const myGlobal = "Hola Mundo";
const NAME_ADMIN = "Nicolás Zuleta";

const greetings = function () {
  alert(myGlobal);
};
greetings();

const username = function () {
  if (NAME_ADMIN === "Santiago Moreno") {
    alert("Hola admin");
  } else {
    alert("No eres el admin");
  }
};
username();

// 2. FUNCTION
function iHaveScope() {
  // local function scope
  function iHaveNestedScope() {
    // nested local function scope
  }
}

// 3. BLOCK
if (3 == "3") {
  // block scope for the if statement
}
for (var i = 0; i < 10; i++) {
  // block scope for the for statement
}
