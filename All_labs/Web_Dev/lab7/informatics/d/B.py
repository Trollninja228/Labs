a=int(input())
i=0
arr=list(map(int,input().split(" ")))
# print(arr)
i=0
while i<a:
    if(arr[i]%2==0):
        print(arr[i],end=" ")
    i+=1