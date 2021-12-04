function solution(nums, target) {
  nums.sort((a, b) => a - b);

  const answer = [];
  const len = nums.length;

  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else {
          answer.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (left < len - 1 && nums[left] === nums[left - 1]) {
            left++;
          }
          while (right > 0 && nums[right] === nums[right + 1]) {
            right--;
          }
        }
      }
      while (j < len - 1 && nums[j + 1] === nums[j]) {
        j++;
      }
    }
    while (i < len - 1 && nums[i + 1] === nums[i]) {
      i++;
    }
  }
  return answer;
}

console.log(solution([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(solution([2, 2, 2, 2, 2], 8)); // [[2, 2, 2, 2]]
