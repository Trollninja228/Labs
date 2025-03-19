a=int(input())
b=int(input())
c=int(a/1000)
# print(a, int(a%10), int(a/10%10), int(a/100%10), int(a/1000%10))
if (c==0 or c/10!=0) and b!=1 :
    print("YES")
elif int(a%10)==int(a/10%10)==int(a/100%10)==int(a/1000%10) and b==1:
    print("YES")
else:
    print("NO")

