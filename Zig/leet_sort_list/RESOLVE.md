## (2021.12.08) leetCode - Sort List

> 출처: https://leetcode.com/problems/sort-list/

가장 기본적인 병합 정렬(merge sort)을 연습해보려고 했는데, 개념은 기본이지만 코드는 만만치 않다. 더군다나 대부분의 코드가 연결 리스트의 참조값으로 넘겨받는 C++로 되어 있어서, JavaScript에는 맞지 않는 접근 방식으로 작성되어 있었다.

조금은 신박한(?) 해결책을 찾아 코드를 따라 작성해 보았다.

우선 주어진 배열을 `left`와 `right` 두 개로 나눈다.
```jsx
const mid = Math.floor(head.length / 2);
const left = head.slice(0, mid);
const right = head.slice(mid);
```

`left`와 `right`는 `mergeSort`라는 함수를 이용하여 합칠 것이다.
```jsx
return merge(mergeSort(left), mergeSort(right));
```

`mergeSort` 함수를 살펴보자.

병합정렬은 in-place 알고리즘이 아니기 때문에 별도의 메모리 공간이 필요하다. `result`라는 이름의 빈 배열을 선언하고, `l`과 `r`로 각각 0부터 인덱스를 잡는다.

```jsx
const result = [];
let l = 0;
let r = 0;
```

`l`은 `left` 배열 안에서, `r`은 `right` 배열 안에서 순회한다. `left[l]`과 `right[r]` 중 작은 값을 `result` 배열에 넣어주고, 현재 부분 배열의 인덱스를 올려준다.

```jsx
while (l < left.length && r < right.length) {
  if (left[l] < right[r]) {
    result.push(left[l]);
    l++;
  } else {
    result.push(right[r]);
    r++;
  }
}
```

while문을 빠져나오면 두 배열 중 숫자가 작은 한 쪽 배열의 요소가 `result`에 담기기 때문에 `result`에 `left`와 `right`의 남은 배열을 합쳐준다.

```jsx
return result.concat(left.slice(l), right.slice(r));
```

그나저나 leetCode에서는 `Array.prototype.slice` 문법이 먹히지 않는다... 왜저래 😬

**Ref** <https://im-developer.tistory.com/134>  