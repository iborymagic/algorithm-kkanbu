function solution(nums) {
  nums.sort((a, b) => a - b);
  const firstPositive = nums.findIndex((num) => num > 0);

  if (firstPositive === -1) {
    if (nums.filter((num) => num === 0).length >= 3) {
      return [[0, 0, 0]];
    }
    return [];
  }

  const answer = [];
  for (let i = 0; i < firstPositive; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const num = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + num + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        answer.push([nums[left], num, nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
        while (nums[right] === nums[right + 1] && left < right) {
          right--;
        }
      }
    }
  }

  return answer;
}

console.log(solution([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(solution([])); // []
console.log(solution([0])); // []
