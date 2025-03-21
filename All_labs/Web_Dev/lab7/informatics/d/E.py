a=int(input())
i=0
arr=list(map(int,input().split(" ")))

i=1
t=True
while i<a:
    if (arr[i]<0 and arr[i-1]<0) or (arr[i]>0 and arr[i-1]>0):
        t=False
        print("YES")
        break
        
    i+=1
if t :
    print("NO")