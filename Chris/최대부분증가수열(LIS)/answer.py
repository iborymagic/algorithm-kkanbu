import sys
sys.stdin = open("input.txt", "r")

n = int(input())
numbers = list(map(int, input().split()))
memo = [0] * (n + 1)
memo[0] = 1
answer = 0


def put_memo(end_index):
    global answer

    max_number_list_length = 0

    for i in range(end_index - 1, -1, -1):
        if numbers[i] < numbers[end_index] and memo[i] > max_number_list_length:
            max_number_list_length = memo[i]

    if memo[end_index] == 0:
        memo[end_index] = 1

    memo[end_index] = max_number_list_length + 1

    if memo[end_index] > answer:
        answer = memo[end_index]


for i in range(1, n):
    put_memo(i)

print(answer)
