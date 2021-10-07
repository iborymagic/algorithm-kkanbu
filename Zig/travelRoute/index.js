function solution(tickets) {
  const answer = [];

  // 1. 항공권을 공항 이름 알파벳 순으로 정렬
  tickets.sort();

  // 2. 항공권의 개수만큼 false가 채워진 visited 배열을 생성
  const visited = Array(tickets.length).fill(false);

  // 3. 출발점을 넣어준다
  answer.push('ICN');

  // 4. dfs를 실행
  dfs('ICN', tickets, visited, answer);

  return answer;
}

function dfs(from, tickets, visited, answer) {
  if (visited.every((visit) => visit)) return true;

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === from && !visited[i]) {
      visited[i] = true;
      answer.push(tickets[i][1]);

      const pos = dfs(tickets[i][1], tickets, visited, answer);
      if (pos) return true;

      visited[i] = false;
    }
  }

  answer.pop();

  return false;
}

console.log(
  solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ])
);
// ["ICN", "JFK", "HND", "IAD"]

console.log(
  solution([
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ])
);
// ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

// 2번
console.log(
  solution([
    ['ICN', 'SFO'],
    ['SFO', 'ICN'],
    ['ICN', 'SFO'],
    ['SFO', 'QRE'],
  ])
);
// ["ICN", "SFO", "ICN", "SFO", "QRE"]

// 1번
console.log(
  solution([
    ['ICN', 'BOO'],
    ['ICN', 'COO'],
    ['COO', 'DOO'],
    ['DOO', 'COO'],
    ['BOO', 'DOO'],
    ['DOO', 'BOO'],
    ['BOO', 'ICN'],
    ['COO', 'BOO'],
  ])
);
// ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]
