function solution(digits) {
  const combinations = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (!digits) return [];

  let word = '';
  const answer = [];
  solve(word, 0, digits.length);

  function solve(current, idx, len) {
    if (idx === len) {
      answer.push(current);

      return;
    }

    const cands = combinations[digits[idx]];
    cands.forEach((cand) => {
      const newCurrent = current + cand;
      solve(newCurrent, idx + 1, len);
    });
  }

  return answer;
}

console.log(solution('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(solution('')); // []
console.log(solution('2')); // ["a","b","c"]
