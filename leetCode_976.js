/*Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths.
If it is impossible to form any triangle of a non-zero area, return 0.
*/

var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
 let n = nums.length;
 console.log(nums);
  while (n > 0) {
    if (nums[n - 1] < nums[n - 2] + nums[n - 3]) {
      return nums[n - 1] + nums[n - 2] + nums[n - 3];
    }
    n--;
  }

  return 0;
};

console.log(largestPerimeter([2,1,2]));//5
