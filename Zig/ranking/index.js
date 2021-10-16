function solution(n, results) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  results.forEach((result) => {
    const [winner, loser] = result;

    graph[winner][loser] = 1;
    graph[loser][winner] = -1;
  });

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (graph[i][j] === 1 && graph[j][k] === 1) {
          graph[i][k] = 1;
        } else if (graph[i][j] === -1 && graph[j][k] === -1) {
          graph[i][k] = -1;
        }
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (graph[i].slice(1).filter((v) => v === 0).length === 1) {
      answer += 1;
    }
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
); // 2 (2번이 4위, 5번이 5위)

console.log(
  solution(5, [
    [1, 2],
    [4, 5],
    [3, 4],
    [2, 3],
  ])
); // 5
