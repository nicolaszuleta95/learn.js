/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
let a = 3;
//let a = -1;
//let a = 0;

function isPositive(a) {
  if (a === 0) throw Error("Zero Error");
  if (a < 0) throw Error("Negative Error");

  return "YES";
}

console.log(isPositive(a));
