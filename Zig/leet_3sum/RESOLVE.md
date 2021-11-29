## (2021.11.29) leetCode - 3sum

> 출처: https://leetcode.com/problems/3sum/

그냥 순열(permutation)으로 3개씩 집어서 더하고, 비교하고 난리쳤더니 바로 TimeOver가 나버렸다. 이 문제의 핵심(?)은 **정렬**에 있었다.

일단 `nums`를 냅다 정렬해 버리기.
```jsx
nums.sort((a, b) => a - b);
```

오름차순으로 정렬이 되었다면, 양수는 굳이 순회할 필요 없다.

```jsx
const firstPositive = nums.findIndex((num) => num > 0);
```

만약 `nums`에 양수가 한 개도 없다면, `[0, 0, 0]` 빼고 답이 될 수 있는 건 없다.
```jsx
if (firstPositive === -1) {
  if (nums.filter((num) => num === 0).length >= 3) {
    return [[0, 0, 0]];
  }
  return [];
}
```

이제 `nums` 배열을 돌며 숫자 하나를 선택하고, 그 숫자를 제외한 숫자들의 양쪽 끝부터 시작해서 하나씩 좁혀나간다.

```jsx
const answer = [];
  for (let i = 0; i < firstPositive; i++) {
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
      }
    }
  }
```

합 즉 `sum`이 0인 경우 `answer`에 `push`만 하고 while문을 빠져나갈 수 없게 된다. 무한루프에 빠져버리는 것이다. 다른 케이스와 동일하게 `left`와 `right`을 하나씩 당겨주되, 이전 숫자와 다음 숫자가 같다면 그냥 스킵한다.
```jsx
answer.push([nums[left], num, nums[right]]);
left++;
right--;
while (nums[left] === nums[left - 1] && left < right) {
  left++;
}
while (nums[right] === nums[right + 1] && left < right) {
  right--;
}
```

여기까지 한 결과, 아래 Input에 대해서
```
[-1,0,1,2,-1,-4]
```

아래 Output이 나왔다.
```
[[-1,-1,2],[0,-1,1],[0,-1,1]]
```

중복처리가 해결되지 않은 것 😱 

for문 안에서 현재 숫자(`nums[i]`가) 이전 숫자(`nums[i - 1]`)와 같을 경우는 스킵한다.

```jsx
if (i > 0 && nums[i] === nums[i - 1]) continue;
```

완성!

**Ref** <https://velog.io/@goonerholic/LeetCode-3Sum>