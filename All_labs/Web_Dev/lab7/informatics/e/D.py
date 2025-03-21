def Election(arr):
    i=0
    c=0
    while i< len(arr):
        if(arr[i]==1):
            c+=1
        else:
            c-=1
        i+=1
    if(c<0):
        return 0
    else:
        return 1

arr=list(map(int,input().split(" ")))
print(Election(arr))