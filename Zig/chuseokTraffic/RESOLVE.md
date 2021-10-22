## (2021.10.19) 프로그래머스 - 추석 트래픽

> 2018 카카오 블라인드 1차
> 출처: [링크](https://programmers.co.kr/learn/courses/30/lessons/17676?language=javascript)

공식 풀이에 슬라이딩 윈도우를 사용하지 말라고 해서, 슬라이딩 윈도우에 대해서도 알아봤다. [이곳](https://blog.fakecoding.com/archives/algorithm-slidingwindow/)에 잘 설명되어 있다.

2018 카카오 블라인드에서 가장 어려웠던 문제라고 하는데, 그런지는 사실 모르겠다. (다른 문제들이 더 어려워 보임...) 다른 방식이 있었는진 모르겠지만, 특별한 알고리즘을 써서 구현하진 않았다.

인자로 받는 `lines` 배열을 돌며 `startTime`과 `endTime`들을 구해 따로 배열(`startTimes`, `endTimes`)에 넣어준 다음, `i`번째 `endTime`과 `i + 1`번째 `startTime`이 `1000ms` 이내의 차이라면 `count`를 1 증가시킨다. 이렇게 하면 모든 `startTime`과 `endTime`을 비교하여 `O(n^2)`만큼의 시간복잡도를 소모하는 비용을 줄일 수 있다. `lines` input이 (종료)시간 순서대로 순차적으로 들어오기 때문에 가능한 해결방식이었다. 문제 해결 자체보다, 날 것으로 들어오는 시간들을 하나의 일관된 timeStamp로 변환하는 과정이 더 귀찮았다.

그리하여 문제를 해결했는데, 20개의 테케 중 3개가 실패가 떴다. 그냥 넘어가고자... 하였으나 뭔가 어렵지 않을 것 같다는 근자감에 한번 다시 살펴봤...지만

이건 다음 기회에...

**Ref** 
- <https://blog.fakecoding.com/archives/algorithm-slidingwindow/> 
- <https://velog.io/@mrbartrns/파이썬-1차추석-트래픽-프로그래머스-레벨3>  