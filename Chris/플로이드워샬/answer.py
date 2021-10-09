import sys
sys.stdin = open("input.txt", "r")

cityCount, roadCount = map(int, input().split())
memo = [[100000000000]* cityCount for _ in range(cityCount)]

for _ in range(roadCount):
  city1, city2, distance = map(int, input().split())
  memo[city1 - 1][city2 - 1] = distance

for i in range(cityCount):
  memo[i][i] = 0

for i in range(cityCount):
  for j in range(cityCount):
    for k in range(cityCount):
      if memo[i][j] > memo[i][k] + memo[k][j]:
        memo[i][j] =  memo[i][k] + memo[k][j]

for i in range(cityCount):
  for j in range(cityCount):
    if memo[i][j] == 100000000000:
      print('M', end=" ")

    else:
      print(memo[i][j], end=" ")
    
  print()

