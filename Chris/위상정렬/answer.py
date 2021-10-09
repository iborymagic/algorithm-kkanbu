import sys
from typing import Deque
sys.stdin = open("input.txt", "r")

node_count, vertex_count = map(int, input().split())

graph = [[0] * (node_count + 1) for _ in range(node_count + 1)]
degree = [0] * (node_count + 1)
Q = Deque()

for _ in range(vertex_count):
  a, b = map(int, input().split())
  graph[a][b] = 1
  degree[b] += 1

for i in range(1, node_count + 1):
  if degree[i] == 0:
    Q.append(i)

while Q:
  node = Q.popleft()
  print(node, end=" ")
  for i in range(1, node_count + 1):
    if graph[node][i] == 1:
      degree[i] -= 1

      if degree[i] == 0:
        Q.append(i)


