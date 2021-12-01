## (2021.12.01) leetCode - 3sum Closest

> 출처: https://leetcode.com/problems/3sum-closest/

sorting은 필요없다고 생각했는데, 해줘야했다.
3개의 수를 선택했을 때 `target`보다 작으면 더 큰 수를 선택하고, 그 반대의 경우 작은 수를 선택하기 위해서다.
```jsx
nums.sort((a, b) => a - b);
```

for문을 돌릴 때도 생각없이 돌리지 말고, 순회하는 인덱스 `i`가 어디까지 가야하는지 생각하자. `i`의 우측으로 `left`와 `right`가 지정되어 있기 때문에 `nums.length - 2`만큼만 돌아야 한다.
```jsx
for (let i = 0; i < nums.length - 2; i++) {
  // ...
}
```

`closest`의 초기값은 `nums` 배열의 가장 앞 세 개의 수를 더해준 값으로 시작한다.
```jsx
let closest = nums[0] + nums[1] + nums[2];
```

for문 안에서 while문을 돌며, 현재 세 개 숫자의 합인 `sum`과 `target`값의 차이가 작다면, `closest` 값을 `sum`으로 갱신한다. 
```jsx
while (left < right) {
  const sum = nums[left] + num + nums[right];
  if (Math.abs(sum - target) < Math.abs(closest - target)) {
    closest = sum;
  }
}
```

`sum`이 `target`값과 일치하는 순간이 오면 바로 리턴하면 된다. 그렇지 않을 경우, 각 상황에 맞게 `left`와 `right`의 값을 좁혀준다.

```jsx
while (left < right) {
  const sum = nums[left] + num + nums[right];
  if (Math.abs(sum - target) < Math.abs(closest - target)) {
    closest = sum;
  }
  if (sum === target) return target;
  if (sum < target) left++;
  else right--;
}
```

**Ref** <https://purealgo.tistory.com/19>  