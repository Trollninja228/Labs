a=int(input())

c=0
i=1
while i<=a:
    if(a%i==0):
        c+=1
    i+=1
print(c)