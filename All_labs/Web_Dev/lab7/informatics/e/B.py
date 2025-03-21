def to_power(a,b):
    return a**b

arr=list(map(int,input().split(" ")))
print(to_power(arr[0],arr[1]))