const mixArray = [true, 23, "12", "this", undefined, 24, 91, 3, 9, "34"];

/**
 *
 */
const addArraysNumber = function () {
  let totalNumbers = 0;
  for (let i = 0; i < mixArray.length; i++) {
    if (typeof mixArray[i] === "number") {
      totalNumbers += mixArray[i];
    }
  }

  return totalNumbers;
};

const notNumberArray = function () {
  let notNumber = [];
  for (let i = 0; i < mixArray.length; i++) {
    if (typeof mixArray[i] !== "number") {
      notNumber.push(mixArray[i]);
    }
  }

  return notNumber;
};

console.log(notNumberArray());
alert(`la suma de los numeros es ${addArraysNumber()}`);
