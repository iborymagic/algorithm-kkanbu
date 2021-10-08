// 문제: https://www.acmicpc.net/problem/11659
const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./input.txt').toString().split('\r\n');

const [firstLine, numberString, ...ranges] = input;
const [count, length] = firstLine.split(' ').map(Number);
const numbers = numberString.split(' ').map(Number);

for (let i = 1; i < count; i++) {
  numbers[i] = numbers[i - 1] + numbers[i];
}
numbers.unshift(0);

for (let i = 0; i < length; i++) {
  const range = ranges[i].split(' ');
  const [start, end] = range.map(Number);
  console.log(numbers[end] - numbers[start - 1]);
}
