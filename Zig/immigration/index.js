function solution(n, times) {
  let answer = 0;

  times.sort((a, b) => a - b);

  let left = 1; // 최소 시간 1분
  let right = n * times[times.length - 1]; // 최대 소요 시간

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    for (let i = 0; i < times.length; i++) {
      count += Math.floor(mid / times[i]);
    }

    console.log(count);

    if (count < n) {
      left = mid + 1;
    } else if (count > n) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
}

// console.log(solution(6, [7, 10])); // 28
