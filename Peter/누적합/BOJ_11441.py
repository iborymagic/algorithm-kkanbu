import sys
sys.stdin = open('input.txt', 'r')

count = int(sys.stdin.readline())
numbers = sys.stdin.readline().split()
numbers.insert(0, 0)

for i in range(count):
  numbers[i + 1] = int(numbers[i + 1]) + int(numbers[i])

length = int(sys.stdin.readline())

for i in range(length):
  start, end = sys.stdin.readline().split()
  print(numbers[int(end)] - numbers[int(start) - 1])
