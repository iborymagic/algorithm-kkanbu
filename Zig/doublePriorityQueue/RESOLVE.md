## (2021.10.16) 프로그래머스 - 이중우선순위큐

> 힙(Heap)
> 출처: [링크](https://programmers.co.kr/learn/courses/30/lessons/42628?language=javascript)

`Math.max`와 `Math.min`을 썼어도 됐겠지만, Heap 문제라고 하니 나름대로 정렬을 해야할 것 같아서 `Array.prototype.sort` 메서드를 사용했다. 딱히 알고리즘 문제랄 것도 없이 쉬운 문제였다.

다만 처음에 일부 테케를 통과하지 못했는데, JavaScript `Array`의 `sort` 메서드의 기본 정렬 방식을 아직까지도 제대로 이해하지 못하고 있었다. 

`sort` 메서드에는 정렬 기준을 알려주는 콜백 함수를 넘길 수 있다. 예를 들어 숫자 오름차순으로 정렬하고자 할 때, 아래와 같이 작성한다.
```jsx
const arr = [4, 1, 3, 5, 2];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4, 5];
```

콜백 함수를 넘기지 않으면 기본적으로 오름차순으로 정렬해준다고 생각했었다. 그래도 위와 동일한 결과가 나오기 때문이다.

```jsx
const arr = [4, 1, 3, 5, 2];
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5];
```

그런데, `[-45, -642]`와 같이 음수가 여러 개 있는 경우 올바르게 정렬되지 않는 문제가 발생했다. `-642`가 `-45`보다 작은데, 정렬 결과가 `[-45, -642]`였다. 음수로 이루어져 있으면 정렬이 잘 안 되나? 🤔

`sort` 메서드를 검색해보았다. 그랬더니

> calling sort() by itself simply sorts the array in **lexicographical (aka alphabetical) order**

JavaScript에서 `Array`의 `sort` 메서드는 어휘 순서, 즉 알파벳 순서로 정렬을 하는 것이었다!

그래서 배열의 요소들이 숫자가 아닌 문자여도 자동 정렬을 해준다.

```jsx
const arr = ['b', 'c', 'd', 'a', 'e'];
arr.sort();
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]
```

그렇다면 다음 예제를 생각해보자.
```jsx
const arr = [1, 20, 2, 10];
arr.sort();
```
`arr`의 결과는 `[1, 2, 10, 20]`이 아닌 `[1, 10, 2, 20]`이 나온다. `sort` 메서드는 기본적으로 숫자 오름차순이 아닌, 알파벳 오름차순으로 정렬하기 때문에 나온 결과다!

따라서 이 문제에서는, 배열(heap)을 숫자의 오름차순으로 정렬해주기 위해 compare 함수를 `sort`의 콜백으로 넘겨주었다.

```jsx
arr.sort((a, b) => a - b);
```

바보같았지만 하나 더 얻어간 시간 😉

**Ref** <http://www.javascriptkit.com/javatutors/arraysort.shtml>  
