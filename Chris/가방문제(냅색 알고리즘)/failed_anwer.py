import sys
sys.stdin = open("input.txt", "r")

n, weight_limit = map(int, input().split())
jewels = [tuple(map(int, input().split())) for _ in range(n)]
max_price = 0


def DFS(acc_weight, acc_price):
    global max_price

    if acc_price > max_price:
        max_price = acc_price

    for j_weight, j_price in jewels:
        total_weight = acc_weight + j_weight
        total_price = acc_price + j_price
        if total_weight <= weight_limit:
            DFS(total_weight, total_price)


DFS(0, 0)

print(max_price)
