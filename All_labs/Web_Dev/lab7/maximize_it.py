n = int(input())
m = int(input())
arr = []
a_arr=[]
p_arr=[]
i = 0
n=0
while i<n:
    arr=list(map(int,input().split(" ")))
    a_arr.append(arr)
    n+=len(arr)
    i+=1
i=0
while i<len(a_arr):
    p_arr.append(0)
    i+=1


i=0
j=0
max=0
print(len(a_arr))
while i<len(a_arr):
    sum=0
    while j<len(p_arr):
        sum+=a_arr[i][p_arr[j]]
        j+=1
    if(max<sum):
        max=sum
    if(p_arr[i]>a_arr[i][-1]):

print(p_arr)