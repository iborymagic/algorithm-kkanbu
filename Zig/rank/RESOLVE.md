## (2021.12.15) 프로그래머스 - 순위

> 출처: https://programmers.co.kr/learn/courses/30/lessons/49191?language=javascript

역시 언젠가 풀었던 문제지만, 그래프 복습을 위해 다시 도전!
...이라고 하기에는 '플로이드 와샬'이라는 이름도 무시무시한 알고리즘을 사용해야 한다고 한다.

'플로이드 와샬' 알고리즘의 핵심 아이디어는 '거쳐가는 정점'을 기준으로 최단거리를 구하는 것이다.

a → c로 가는 경로의 비용이 7이고,
a → b로 가는 경로의 비용이 2,
b → c로 가는 경로의 비용이 3라면,

a → c로 가는 경로의 비용을 2 + 3 = 5로 갱신시키는 방식이다.

우선 이중배열로 그래프를 만들어준다.
```jsx
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
```

```jsx
results.forEach((result) => {
  const [winner, loser] = result;
  graph[winner][loser] = true;
});
```

3중 for문을 돌며 a가 b를 이기고, b가 c를 이겼다면 a가 c를 이겼다고 표시해준다.

```jsx
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      if (graph[j][i] && graph[i][k]) {
        graph[j][k] = true;
      }
    }
  }
}
```

> 🚨 이때 가장 중첩된 for문에서 `graph`의 인덱싱 순서를 아래처럼 하면 몇몇 테스트케이스가 통과하지 않는다!

```jsx
if (graph[i][j] && graph[j][k]) {
  graph[i][k] = true;
}
```

`i`와 `j`가 바뀐게 뭐가 그리 큰 문제가 되나 싶지만, '중간자'를 생각해야 한다.

`a`가 `b`를 이기고, `b`가 `c`를 이겼을 때 `a`가 `c`를 이겼다고 판단할 수 있는 근거 즉 중간자는 `b`가 된다. `graph` 배열을 순회하면서 새롭게 승패 여부를 확정지어줄 인덱스, 가장 바깥쪽에서 돌고 있는 메인 for문의 인덱스인 `i`가 중간자 역할을 해야 하므로 `graph[j][k]`의 값을 갱신시켜줘야 한다.

(그래서 몇몇 풀이를 보면, 헷갈리지 않게 가장 바깥 for문의 인덱스를 `k`로 해두는 경우도 있다.)

이러면 `graph` 배열은 아래 모양이 된다.
(문제에 주어진 테스트케이스 활용)

```jsx
[
  [ false, false, false, false, false, false ],
  [ false, false, true, false, false, true ],
  [ false, false, false, false, false, true ],
  [ false, false, true, false, false, true ],
  [ false, false, true, true, false, true ],
  [ false, false, false, false, false, false ]
]
```
군데군데 `true`가 보인다. `a`행 `b`열의 값이 `true`라면, `a`가 `b`를 이겼다는 뜻이다.

이중 for문을 돌며 자신(`i`)이 상대(`j`)를 확실하게 이겼거나 (`graph[i][j]`), 확실하게 졌다면 (`graph[j][i]`) `count`를 1 증가시킨다.

최종 `count`가 인원 수(`n`)보다 1 작다면 자신을 제외하고는 모든 선수에 대하여 승패를 확신할 수 있다는 뜻이므로, `answer`를 1씩 증가시켜준다.

```jsx
for (let i = 1; i <= n; i++) {
  let count = 0;
  for (let j = 1; j <= n; j++) {
    if (graph[i][j] || graph[j][i]) {
      count++;
    }
  }
  if (count === n - 1) {
    answer++;
  }
}
```

**Ref** 
<https://mungto.tistory.com/58> 
<https://blog.naver.com/ndb796/221234427842>  