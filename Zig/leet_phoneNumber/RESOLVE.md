## (2021.12.08) leetCode - Letter Combinations of a Phone Number

> 출처: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

처음에 풀었던 코드... 방금 전에 책에서 읽었던 재귀함수 호출로 뭔가 애매하지만 용감하게 도전
```jsx
function solution(digits) {
  const combinations = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  let word = '';
  const answer = [];
  solve(word, 0, digits.length);

  function solve(current, idx, len) {
    if (idx === len) {
      answer.push(current);

      return;
    }

    const cands = combinations[digits[idx]];
    cands.forEach((cand) => {
      const newCurrent = current + cand;
      solve(newCurrent, idx + 1, len);
    });
  }

  return answer;
}
```

그런데 ‼️‼️‼
모두 통과해버렸다. 웬열

그런데 ‼️‼️‼
leetCode에서는 `Timeover`도 아니고 `Wrong Answer`... 왜 이러는가?

아하
두 번째 테스트케이스인 `solution('')`을 고려하지 않았다! 

```jsx
if (!digits) return [];
```

다른 코드들도 참고했는데, 모두 비슷하게 풀었다.
쉬운 백트래킹 문제지만 한번에 통과해서 뿌듯 🤩 