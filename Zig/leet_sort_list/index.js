function mergeSort(head) {
  if (head.length < 2) return head;

  const mid = Math.floor(head.length / 2);
  const left = head.slice(0, mid);
  const right = head.slice(mid);

  function merge(left, right) {
    const result = [];
    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
    }

    return result.concat(left.slice(l), right.slice(r));
  }

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([-1, 5, 3, 4, 0])); // [-1, 0, 3, 4, 5]
console.log(mergeSort([]));
