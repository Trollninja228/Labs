a=input()
a=a[::-1]

i=0
sum=0
while i<len(a):
    
    sum+=int(a[i])*(2**i)
    # print(i,sum)
    i+=1
print(sum)
