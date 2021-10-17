from datetime import datetime

def solution(lines):
  def get_timestamp(hour, min, sec, millisec):
    return (60 * 60 * 1000 * hour) + (60 * 1000 * min) + (1000 * sec) + millisec


  def is_overlap_exist(time, duration_time):
    start_time, end_time = time
    duration_start_time, duration_end_time = duration_time

    if duration_start_time <= start_time <= duration_end_time:
      return True

    if duration_start_time <= end_time <= duration_end_time :
      return True

    return False

  times = []

  for line in lines:
    _, timeString, durationString = line.split(" ")
    hour, min, rest = timeString.split(":")
    sec, millisec = rest.split(".")
    hour, min, sec, millisec = map(int, (hour, min, sec, millisec))
    duration = int(float(durationString[:-1]) * 1000)

    end = get_timestamp(hour, min, sec, millisec)

    start = end - duration + 1

    times.append((start, end))

  max_count = 0

  for i in range(len(times)):
    start = times[i][0]
    duration_time = (start, start + 3600)

    count = 0

    for j in range(i, len(times)):
      time = times[j]

      if is_overlap_exist(time, duration_time):
        count += 1

    if count > max_count:
      max_count = count

  return max_count

print(solution([
"2016-09-15 20:59:57.421 0.351s",
"2016-09-15 20:59:58.233 1.181s",
"2016-09-15 20:59:58.299 0.8s",
"2016-09-15 20:59:58.688 1.041s",
"2016-09-15 20:59:59.591 1.412s",
"2016-09-15 21:00:00.464 1.466s",
"2016-09-15 21:00:00.741 1.581s",
"2016-09-15 21:00:00.748 2.31s",
"2016-09-15 21:00:00.966 0.381s",
"2016-09-15 21:00:02.066 2.62s"
]))
