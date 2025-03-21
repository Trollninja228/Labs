a=int(input())
i=0
arr=list(map(int,input().split(" ")))
# print(arr)
i=0
c=0
while i<a:
    if(arr[i]>0):
        c+=1
    i+=1
print(c)