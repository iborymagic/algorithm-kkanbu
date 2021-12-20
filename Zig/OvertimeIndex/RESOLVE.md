## (2021.12.14) 프로그래머스 - 야근 지수

> 출처: https://programmers.co.kr/learn/courses/30/lessons/12927?language=javascript

웬일로 간단한가 했더니, 효율성이 있는 문제였다~!

처음 제출한 답안은 다음과 같다. `works` 배열을 다 돌면서 가장 소요시간이 많이 걸리는 일부터 하나씩 해주기.
```jsx
function solution(n, works) {
  if (works.reduce((acc, cum) => acc + cum, 0) <= n) return 0;

  while (n) {
    const maxWork = Math.max(...works);
    const maxIdx = works.indexOf(maxWork);
    works[maxIdx]--;

    n--;
  }

  return works.reduce((acc, cum) => acc + Math.pow(cum, 2), 0);
}
```

`n`이 `1,000,000`까지 가서 그런가, 정확성 테스트는 전부 통과하는데 효율성이 문제였다. Lv3 문제가 이렇게 쉬울리 없지.

아니 근데 다른 풀이들도 이렇게 했던데? 뭐지

[질문](https://programmers.co.kr/questions/3056)에 따르면 `max`와 `indexOf` 함수가 비용이 많이 소모된다고 한다. 물론 해당 답변은 파이썬이었지만, 자바스크립트도 크게 다르지 않을 것..? (더군다나 자바스크립트는 다른 언어와는 달리 '희소배열'을 사용하기 때문에 인덱스로 접근하는 경우 더욱 느리기 때문에 연산이 오래 걸릴 것 같다는 추측이다.)

문제 해결을 위해서는 우선순위 큐(priority queue)를 사용해야 한다고 한다. 자바스크립트로는 그런 걸 구현하기 힘드므로, 살짝 다른 방식으로 접근한다.

우선 배열을 내림차순으로 정렬해준다.
```jsx
const sorted = [...works].sort((a, b) => b - a);
```

가장 시간이 오래 걸리는 일부터 좀 줄여줘야 한다. `maxWork`는 내림차순 배열의 첫 번째 요소일 것 

```jsx
let maxWork = sorted[0];
```

핵심은 같은 최대값을 가지는 요소들을 빨리 제거해주는 것이다.

예를 들어 `works` 배열이 `[5, 5, 5, 2, 1]`이고 `n`이 `6`일 때, 어느 세월에 매번 최댓값을 구하면서 값이 `5` 요소들을 빼줄 것인가? 값이 `5`인 요소들은 한번에 다같이 처리해주는 것이 순회를 덜 하게 되어 효율적일 것이다.

우선 `n`이 남아있을 때까지 바깥 while문을 돌아준다. while문 안에서 또 `sorted` 배열을 돌면서, `maxWork`와 현재 순회중인 `sorted[i]`의 값이 같다면 최댓값이 여러 개라면 해당 값들을 하나 빼준다. 이때 `n`이 이미 다 소진되었다면 for문을 빠져나간다.

`maxWork`에 해당하는 `sorted[i]`들을 하나씩 빼줬으므로, 예제에서 `5`의 값을 갖던 원소들은 이제 값이 `4`가 될 것이다. 그러므로 `maxWork`도 하나 빼준다. 그리고 다시 비교를 시작한다. 

마찬가지로 `maxWork`가 남아있을 때까지 작업을 반복해준다.

```jsx
while (n) {
  for (let i = 0; i < sorted.length; i++) {
    if (maxWork === sorted[i]) {
      sorted[i] -= sorted[i] > 0 ? 1 : 0;
      n--;
    }
    if (!n) break;
  }
  maxWork--;
  if (!maxWork) break;
}
```

이후 모든 요소의 제곱의 합인 리턴값은 이전과 똑같이 작성해준다.

```jsx
return sorted.reduce((acc, cum) => acc + Math.pow(cum, 2), 0);
```

사실 이론상으로는 납득이 가는데, 두 번째 코드는 똑같은 `while(n)`문 안에서 for문까지 돌린다는 점에서 더 효율이 안 좋지 않나? 생각했었다. 하지만 첫 번째 코드도 `Math.max()`를 사용하여 루프를 돌지 않는 것처럼 눈속임을 하고있을 뿐이다. 따지고 보면 동일한 최댓값들을 한번에 제거해주고 있으므로, 순회 횟수 자체를 줄여준다. 

🤔 아무튼 정말 쉽지 않다. 

**Ref** 
<https://velog.io/@johnyejin/JavaScript-프로그래머스-야근-지수>