/**
 * Given five positive integers, find the minimum and maximum values
that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line
of two space-separated long integers.
 * @param {*} arr
 * @description
 */
function miniMaxSum(arr) {
  let miniArr = arr.sort().slice(0, 4);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let miniSum = miniArr.reduce(reducer);
  let maxArr = arr.sort((a, b) => b - a).slice(0, 4);
  let maxSum = maxArr.reduce(reducer);
  return console.log(`${miniSum} ${maxSum}`);
}

let arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
