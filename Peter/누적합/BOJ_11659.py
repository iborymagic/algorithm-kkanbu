import sys
sys.stdin = open('input.txt', 'r')

count, length = map(int, sys.stdin.readline().split())
numbers = sys.stdin.readline().split()

# 앞에 0을 넣어주면 배열 index 벗어날 일이 없어서 편함
numbers.insert(0, 0)

# 누적합 배열 구함
for i in range(count):
  numbers[i + 1] = int(numbers[i + 1]) + int(numbers[i])

# 끝 값 - (시작 - 1) 값 = 범위 누적합
for i in range(length):
  start, end = sys.stdin.readline().split()
  print(numbers[int(end)] - numbers[int(start) - 1])
