function solution(lines) {
  let answer = 0;
  const startTimes = [];
  const endTimes = [];

  lines.forEach((line) => {
    const [_, endTime, processingTime] = line.split(' ');
    const [hour, minute, fullSecond] = endTime.split(':').map((elem) => Number(elem));
    const [second, millisecond] = String(fullSecond)
      .split('.')
      .map((elem) => Number(elem));
    const endTimeStamp = (hour * 3600 + minute * 60 + second) * 1000 + (millisecond || 0);
    const processingSeconds = Number(processingTime.slice(0, -1)) * 1000;
    const startTimeStamp = endTimeStamp - processingSeconds + 1;

    startTimes.push(startTimeStamp);
    endTimes.push(endTimeStamp);
  });
  startTimes.sort();

  for (let i = 0; i < lines.length; i++) {
    let count = 1;

    for (let j = i + 1; j < lines.length; j++) {
      if (endTimes[i] > startTimes[j] - 1000) {
        count++;
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
}

console.log(solution(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'])); // 1
console.log(solution(['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s'])); // 2
console.log(
  solution([
    '2016-09-15 20:59:57.421 0.351s',
    '2016-09-15 20:59:58.233 1.181s',
    '2016-09-15 20:59:58.299 0.8s',
    '2016-09-15 20:59:58.688 1.041s',
    '2016-09-15 20:59:59.591 1.412s',
    '2016-09-15 21:00:00.464 1.466s',
    '2016-09-15 21:00:00.741 1.581s',
    '2016-09-15 21:00:00.748 2.31s',
    '2016-09-15 21:00:00.966 0.381s',
    '2016-09-15 21:00:02.066 2.62s',
  ])
); // 7
