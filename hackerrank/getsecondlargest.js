const nums = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
  let first = nums[0];
  let second = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    }

    if (nums[i] > second && nums[i] < first) {
      second = nums[i];
    }
  }

  return second;
}

console.log(getSecondLargest(nums));
