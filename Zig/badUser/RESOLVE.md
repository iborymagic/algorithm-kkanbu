## (2021.10.30) 프로그래머스 - 불량 사용자

> 출처: [링크](https://programmers.co.kr/learn/courses/30/lessons/64064?language=javascript)

이틀 동안 조합(Combination)으로 푼다고 난리쳤는데...

재귀적으로 함수를 호출하며 매칭되는 userId를 순서대로 담는다는 컨셉은 크게 틀리지 않았다. 하지만 굳이 복잡하게 구현할 필요는 없었다. `banned_id`에 들어갈 수 있는 유저의 id를 하나씩 순서대로 담고 `Set`으로 중복을 제거해준다.

처음에 `banned_id`를 순회하며 매칭될 수 있는 유저의 id를 담아준 `caseArray`는 다음과 같은 형태로 만들어진다. (테스트케이스 3번)
```jsx
[
  [ 'frodo', 'fradi' ],
  [ 'frodo', 'crodo' ],
  [ 'abc123', 'frodoc' ],
  [ 'abc123', 'frodoc' ]
]
```

전체 배열을 돌며 큰 배열의 각 요소에 해당하는 배열에서 id를 하나씩 얻어 새로운 케이스에 추가한다. 이때 아래 코드에서,
```jsx
for (let uid of caseArray[level]) {
  const next = new Set([...caseSet, uid]);
  if (next.size !== caseSet.size) {
    dfs(caseArray, level + 1, next);
  }
}
```
이번 차례의 `uid`를 `next` Set에 새로 넣었음에도 불구 `next.size === caseSet.size`라면 이번 차례의 `uid`가 이미 `caseSet`에 존재하여 `Set` 자료구조에 의해 걸러진 것이므로 더 이상 탐색(`dfs`를 호출)하지 않는다.

`dfs` 함수의 base case는 다음과 같다.
```jsx
if (level === caseArray.length) {
  result.add([...caseSet].sort().join(', '));
  return;
}
```
`banned_id`의 모든 요소를 순회 후 `result` Set에 추가할 때, `caseSet`을 배열로 변환한 후 정렬한 뒤, `join` 메서드를 통해 문자열로 바꿔줘야 중복된 `caseSet`이 `result` Set에 들어가는 것을 방지할 수 있다. 같은 배열인지의 여부를 배열 요소를 전부 순회하는 것이 아니라, 이렇게 작성함으로써 더욱 효율적으로 판단할 수 있다.

그리고, 배열의 `reduce` 메서드를 잘 활용해야겠다. 코드가 정말 직관적이고 깔끔해진다! 

**Ref** <https://velog.io/@teihong93/프로그래머스-불량-사용자-카카오-2019-인턴-3번>  
