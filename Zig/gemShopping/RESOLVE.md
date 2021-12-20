## (2021.12.16) 프로그래머스 - 보석 쇼핑

> 출처: https://programmers.co.kr/learn/courses/30/lessons/67258?language=javascript

언젠가 풀었던 코드가 남아있다. 정확성은 모두 통과하고, 효율성은 모두 떨어진 것을 보아 뭔가 열심히 풀긴 했나보다.

```jsx
function solution(gems) {
  gems.unshift(0);
  const uniqGems = [...new Set(gems)];
  const answer = solve(gems, uniqGems, 1);

  return answer;
}

function solve(gems, uniq, idx) {
  if (idx >= gems.length) return;

  let copyUniq = uniq.slice(0); // uniq 복사
  let res = [];
  let end = idx - 1; // idx의 출발점 복사
  res.push(idx); // start index

  while (copyUniq.length > 1) {
    end++;
    if (end == gems.length) return;

    let curr = gems[end];
    let gemIdx = copyUniq.indexOf(curr);
    if (gemIdx != -1) copyUniq.splice(gemIdx, 1);
  }
  res.push(end);
  if (res.length < 2) return;

  const newRes = solve(gems, uniq, idx + 1);
  if (newRes && res && newRes[1] - newRes[0] < res[1] - res[0]) {
    res = newRes;
  }
  
  return res;
}
```

딱 봐도 시간초과가 날 것 같다. 보석들의 유니크한 배열에서 원소가 남아있을 때까지 loop을 돌면서, 모든 보석의 종류를 다 포함하게 되는 경우들의 인덱스 배열을 리턴한다. `solve` 함수 안에서 `solve` 함수를 계속 호출하고 있으니, 너무 깊은 재귀에 그만 뻗어버리지 않을까(...)

아무튼 배열의 처음부터 끝까지 순차적으로 탐색하는 **탐색** 방법으로 풀면 된다고 한다. 이때 반환해야 하는 값이 배열의 시작점과 끝점 즉 '범위'를 반환하므로 **투 포인터**를 사용하여 `O(n)`에 해결할 수 있다.

(`gems` 배열의 크기는 최대 100,000이기 때문에, loop을 2번 도는 `O(n^2)` 알고리즘에서는 시간초과가 날 수 있음에 유의해야 한다.)


```jsx
let start = 0;
let end = 0;
```

모든 종류의 보석이 다 있는지 배열을 통해서 검증하려고 했는데, 그러려면 while문 안에서 또 배열 loop을 돌아야 하므로 터지고 말 것이기 때문에 key-value 쌍을 갖는 `Map` 등의 자료구조를 써준다.

```jsx
while (start <= end && end < gems.length) {
  if (map.size === kind) {
    if (answer[1] - answer[0] > end - start) {
      answer = [start + 1, end + 1];
    }

    map.set(gems[start], map.get(gems[start]) - 1);
    if (map.get(gems[start]) === 0) {
      map.delete(gems[start]);
    }

    start++;
  } else if (map.size < kind) {
    end++;

    const right = map.get(gems[end]);
    map.set(gems[end], right ? right + 1 : 1);
  }
}
```
또 많은 풀이들에선 순서를 보장해주기 위해 `Map`을 사용하고 있다. 하지만 최신 JavaScript 문법은 일반 객체도 순서를 보장해주는 것으로 알고 있는데, 사용이 가능하지 않을까 싶다.

**Ref** <https://velog.io/@bepyan/JS-프로그래머스-보석-쇼핑>  


