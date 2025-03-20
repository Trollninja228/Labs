a=input()
a=a[::-1]
# print(a)
c=True
for i in a:
    if c :
        if(i=='0'):
            continue
        else:
            c=False
    print(i,end="")