a=int(input())
i=0
arr=list(map(int,input().split(" ")))
# print(arr)
i=0
c=0
t1=arr[0]
while i<a:
    t=arr[i]
    if(t>t1):
        c+=1
        t1=t
    i+=1
print(c)