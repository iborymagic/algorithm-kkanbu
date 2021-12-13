function solution(n) {
  const dp = [];

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  const answer = dp[n] % 1234567;

  return answer;
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3
