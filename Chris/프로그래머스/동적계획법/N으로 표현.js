function solution(N, number) {
  if (N === number) {
    return 1;
  }

  const memo = new Array(8).fill(0).map((_, index) => [
    Number(String(N).repeat(index + 1)),
  ]);

  for (let i = 1; i < memo.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      for (let op1 of memo[j]) {
        for (let op2 of memo[i - j - 1]) {
          memo[i].push(op1 + op2);
          memo[i].push(op1 - op2);
          memo[i].push(op1 * op2);
          op2 !== 0 && memo[i].push(Math.floor(op1 / op2));
        }
      }
    }

    if (memo[i].includes(number)) {
      return i + 1;
    }
  }

  return -1
}

solution(5, 12);
