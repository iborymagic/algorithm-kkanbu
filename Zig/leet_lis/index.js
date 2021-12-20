function lengthOfLIS(nums) {
  const dp = Array(nums.length).fill(-1);
  const answer = find(0);

  function find(start) {
    if (dp[start] !== -1) return dp[start];

    // 항상 nums[start]는 있기 때문에 길이는 최하 1
    let ret = 1;
    for (let next = start + 1; next < nums.length; next++) {
      if (nums[start] < nums[next]) {
        ret = Math.max(ret, find(next) + 1);
      }
    }

    dp[start] = ret;
    return ret;
  }

  return answer;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
