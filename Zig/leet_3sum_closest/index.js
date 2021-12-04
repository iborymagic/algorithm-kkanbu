function solution(nums, target) {
  nums.sort((a, b) => a - b);

  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + num + nums[right];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum === target) return target;
      if (sum < target) left++;
      else right--;
    }
  }

  return closest;
}

console.log(solution([-1, 2, 1, -4], 1)); // 2
console.log(solution([0, 0, 0], 1)); // 0
