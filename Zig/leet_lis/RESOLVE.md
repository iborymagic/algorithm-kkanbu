## (2021.12.20) leetCode - Longest Increasing Subsequence

> 출처: https://leetcode.com/problems/longest-increasing-subsequence/

유명한 최대증가부분수열(LIS) 문제다. 아래처럼 for문을 두 번이나 돌면서 재귀로 호출하는 경우 당연히 시간초과가 나버린다. 문제에서는 `O(nlogn)`의 시간복잡도가 제약사항이다.

```jsx
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    const temp = [];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        temp.push(nums[j]);
      }
    }
    answer = Math.max(answer, 1 + lengthOfLIS(temp));
  }
  return answer;
}
```

어쩔 수 없이 재귀함수를 사용해야 하긴 한다. 문제 해결시간, 즉 위 코드에서의 이중 for문을 줄여야 한다. 

재귀함수 호출의 input으로 들어가는 배열은 항상 두 가지 중 하나가 된다.
1. 원래 주어진 수열 `nums`
2. 원래 주어진 수열의 원소 `nums[i]`에 대해, `nums[i + 1 ...]` 수열에서 `nums[i]`보다 큰 수들만을 포함하는 부분 수열

재귀적으로 호출하는 함수의 이름을 `find`라고 한다면, 재귀함수 반환값인 `find(start)`는 `nums[start]`에서 시작하는 부분 증가 수열 중 최대의 길이와 같다고 생각해볼 수 있다. 

```jsx
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
```

일부 테케가 통과를 못한다! 😵😵

input이 `[10, 9, 2, 5, 3, 7, 101, 18]`인 경우, 첫 번째 원소인 `10` 이후에 나오는 원소들 중 `10`보다 작은 수들에 대해서는 `dp` 값이 전부 `-1`이 되어버린다. 

왤까? 하루 종일 고민 중이다...

더군다나 위 코드는 총 `O(n)`개의 부분 문제를 갖고, 하나를 해결할 때마다 `O(n)` 시간의 반복문을 순회하므로 전체 `O(n^2)`의 복잡도를 갖는다.

텅 빈 수열에서 시작해 숫자를 하나씩 추가해 나가며 각 길이를 갖는 증가 수열 중 가장 마지막 수가 작은 것은 무엇인지를 추적하는 방법을 쓸 수 있다.

그건 다음 기회에...

**Ref** <https://lhoiktiv.tistory.com/160> 