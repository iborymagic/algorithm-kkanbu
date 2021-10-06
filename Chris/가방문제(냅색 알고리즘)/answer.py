import sys
sys.stdin = open("input.txt", "r")

n, weight_limit = map(int, input().split())
jewels = [tuple(map(int, input().split())) for _ in range(n)]
memo = [0] * (weight_limit + 1)

for i in range(weight_limit + 1):
    for j_weight, j_price in jewels:
        if i - j_weight >= 0:
            memo[i] = max(memo[i], memo[i - j_weight] + j_price)

print(memo[weight_limit])
