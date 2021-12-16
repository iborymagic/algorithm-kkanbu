function solution(gems) {
  const unique = [...new Set(gems)];
  const kind = unique.length;
  const map = new Map();
  map.set(gems[0], 1);

  let answer = [1, gems.length];
  let start = 0;
  let end = 0;

  while (start <= end && end < gems.length) {
    if (map.size === kind) {
      if (answer[1] - answer[0] > end - start) {
        answer = [start + 1, end + 1];
      }

      map.set(gems[start], map.get(gems[start]) - 1);
      if (map.get(gems[start]) === 0) {
        map.delete(gems[start]);
      }

      start++;
    } else if (map.size < kind) {
      end++;

      const right = map.get(gems[end]);
      map.set(gems[end], right ? right + 1 : 1);
    }
  }

  return answer;
}

console.log(solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA'])); // [3, 7]
console.log(solution(['AA', 'AB', 'AC', 'AA', 'AC'])); // [1, 3]
console.log(solution(['XYZ', 'XYZ', 'XYZ'])); // [1, 1]
console.log(solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB'])); // [1, 5]
