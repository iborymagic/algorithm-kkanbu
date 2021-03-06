## (2021.10.22) 프로그래머스 - 하노이의 탑

> 그래프
> 출처: [링크](https://programmers.co.kr/learn/courses/30/lessons/12946)

재귀 문제에서 유명한 하노이탑. 오랜만에 한번 다시 풀어보고 싶었다. 문제 설명은 필요없을 것 같다.

n개의 원판을 1 ➡️ 2 ➡️ 3번 핀으로 옮기는 경우의 수를 계산하면 된다. 이때 항상 작은 원판을 2번 핀으로 먼저 옮기고, 큰 원판을 3번 핀으로 옮긴 후, 2번 핀의 원판을 3번 핀으로 옮긴다.

즉 n-1개의 원판을 1 ➡️ 2번 핀으로 옮기고, 마지막 제일 큰 원판을 1 ➡️ 3번 핀으로 옮긴 다음, 나머지 2번 핀에 있는 원판들을 2 ➡️ 3번 핀으로 옮긴다.

`hanoi(n, from, to, bypass)`에서 `n`은 원판의 개수를, `from`은 시작 지점의 핀 번호를, `to`는 목적지의 핀 번호를, `bypass`는 보조 핀 번호 즉 `from`과 `to`를 제외한 핀 번호를 가리킨다.

재귀적으로 함수를 호출하면 되는데, 하노이의 탑 문제는 기본이 되면서도 볼 때마다 아리송한 것 같다. 찾아보니 다른 사람들도 마찬가지인 것 같다.

프로그래머스에서는 입출력 예시만 통과되고 테케는 뭐가 문젠지 하나도 통과하지 않는다. 🤔 아래 출처를 참고하여 같은 코드를 파이썬으로 돌리면 되는데, 모르겠다.

**Ref** <https://dev-note-97.tistory.com/164> 