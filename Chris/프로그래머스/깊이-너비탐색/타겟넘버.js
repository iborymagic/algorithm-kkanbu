function solution(numbers, target) {
  let count = 0;

  function DFS(index, total) {
    if (index === numbers.length) {
      if (total === target) {
        count += 1;
      }

      return;
    }

    DFS(index + 1, total + numbers[index]);
    DFS(index + 1, total - numbers[index]);
  }

  DFS(0, 0);

  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3));
