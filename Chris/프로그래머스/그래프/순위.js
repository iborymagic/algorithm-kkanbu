function solution(n, results) {
  const graph = Array(n)
    .fill(0)
    .map((x) => Array(n).fill(x));

  for (let [win, lose] of results) {
    graph[win - 1][lose - 1] = 1;
    graph[lose - 1][win - 1] = -1;
  }

  for (let i = 0; i < graph.length; i += 1) {
    for (let j = 0; j < graph[i].length; j += 1) {
      if (graph[i][j] === 1) {
        for (let k = 0; k < graph[j].length; k += 1) {
          if (graph[j][k] === 1) {
            graph[i][k] = 1;
            graph[k][i] = -1;
          }
        }
      }

      if (graph[i][j] === -1) {
        for (let k = 0; k < graph[j].length; k += 1) {
          if (graph[j][k] === -1) {
            graph[i][k] = -1;
            graph[k][i] = 1;
          }
        }
      }
    }
  }

  const answer = graph.filter(points => points.filter(point => point === 0).length <= 1).length;

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
);
