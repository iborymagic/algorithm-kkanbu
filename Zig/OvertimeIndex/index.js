function solution(n, works) {
  if (works.reduce((acc, cum) => acc + cum, 0) <= n) return 0;

  const sorted = [...works].sort((a, b) => b - a);
  let maxWork = sorted[0];

  while (n) {
    for (let i = 0; i < sorted.length; i++) {
      if (maxWork === sorted[i]) {
        sorted[i] -= sorted[i] > 0 ? 1 : 0;
        n--;
      }
      if (!n) break;
    }
    maxWork--;
    if (!maxWork) break;
  }

  return sorted.reduce((acc, cum) => acc + Math.pow(cum, 2), 0);
}

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 0
