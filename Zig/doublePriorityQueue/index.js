function solution(operations) {
  const heap = [];

  operations.forEach((operation) => {
    const [command, number] = operation.split(' ');
    if (command === 'I') {
      heap.push(Number(number));
    } else if (command === 'D') {
      if (Number(number) === 1) {
        heap.pop();
      } else if (Number(number) === -1) {
        heap.shift();
      }
    }

    heap.sort((a, b) => a - b);
  });

  if (heap.length === 0) return [0, 0];
  else if (heap.length === 1) return [heap[0], heap[0]];
  else return [heap.pop(), heap.shift()];
}

console.log(solution(['I 16', 'D 1'])); // [0, 0]
console.log(solution(['I 7', 'I 5', 'I -5', 'D -1'])); // [7, 5]
console.log(solution(['I -45', 'I 653', 'D 1', 'I -642', 'I 45', 'I 97', 'D 1', 'D -1', 'I 333'])); // [333, -45]
