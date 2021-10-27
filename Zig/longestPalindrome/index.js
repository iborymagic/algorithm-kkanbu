function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    let odd = isPalindrome(s, i, i);
    let even = isPalindrome(s, i, i + 1);
    let currentMax = Math.max(odd, even);
    answer = Math.max(answer, currentMax);
  }

  return answer;
}

function isPalindrome(string, left, right) {
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    right++;
    left--;
  }

  return right - left - 1;
}

console.log(solution('abcdcba')); // 7
console.log(solution('abacde')); // 3
