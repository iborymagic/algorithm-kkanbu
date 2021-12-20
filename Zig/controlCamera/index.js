function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => a[0] - b[0]);

  let temp = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    if (temp > routes[i][1]) {
      temp = routes[i][1];
    }
    if (temp < routes[i][0]) {
      answer++;
      temp = routes[i][1];
    }
  }

  return answer;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
); // 2
