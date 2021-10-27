## (2021.10.27) 프로그래머스 - 가장 긴 팰린드롬

> 출처: [링크](https://programmers.co.kr/learn/courses/30/lessons/12904?language=javascript)

효율성 점수가 걸려있는 문제다. `substring` 등으로 일일이 비교하면 끝장난다는 뜻이다.

한 점(`i`)에서 시작하여 점점 좌우를 늘려나가며 팰린드롬이 될 때까지 늘려나간다. 이때 문자열의 길이가 홀수일 수도, 짝수일 수도 있기 때문에 두 가지 경우를 모두 계산해준다.

```jsx
let odd = isPalindrome(s, i, i);
let even = isPalindrome(s, i, i + 1);
```

그렇게 가장 긴 팰린드롬의 길이를 찾으면 끝!

**Ref** <https://0xd00d00.github.io/2021/08/17/programmers_palindrome.html>