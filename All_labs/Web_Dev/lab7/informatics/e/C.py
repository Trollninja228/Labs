def xor(x,y):
    if (x and y)==False and (x or y)==True:
        return 1
    else:
        return 0

arr=list(map(int,input().split(" ")))
print(xor(arr[0],arr[1]))