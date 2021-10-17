def solution(lines):
  def get_timestamp(hour, min, sec, millisec):
    return (60 * 60 * 1000 * hour) + (60 * 1000 * min) + (1000 * sec) + millisec


  def is_overlap_exist(time, duration_time):
    start_time, end_time = time
    duration_start_time, duration_end_time = duration_time

    if end_time < duration_start_time or start_time >= duration_end_time:
      return False

    return True

  def get_overlap_count(times, duration_time):
    count = 0

    for j in range(i, len(times)):
      time = times[j]

      if is_overlap_exist(time, duration_time):
        count += 1
    
    return count


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
    end = times[i][1]
    duration_time = (end, end + 1000)

    count = get_overlap_count(times, duration_time)

    if count > max_count:
      max_count = count

  return max_count
