function solution(n) {
  const answer = hanoi(n, 1, 3, 2);

  return answer;
}

function hanoi(n, from, to, bypass) {
  if (n === 1) {
    return [from, to];
  } else {
    const path = [];
    path.push(hanoi(n - 1, from, bypass, to));
    path.push([from, to]);
    path.push(hanoi(n - 1, bypass, to, from));

    return path;
  }
}

console.log(solution(2));
// [ [1,2], [1,3], [2,3] ]
