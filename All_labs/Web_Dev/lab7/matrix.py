def range_for_delete(pos):
    pos1=[]
    i=0
    range=1
    while i<len(pos):
        j=i
        range=0
        while j+1<len(pos):
            A=str(pos[j]+1)
            while str(pos[j+1])==str(pos[j]+1):
                range+=1
                break
            else:
                pos1.append([i,range])
                break
            # match str(pos[j+1]):
            #     case A:
            #         print("LOLOLOLOL")
            #         # print(str(pos[j+1]),str(a))
            #         range+=1
            #     case _:
            #         print("TOTOTOTOOTOT")
            #         pos1.append([i,range])
            #         break
            j+=1
        i+=j
    return pos1
                    






matrix=[]
s=[]
temp=input()

n=int(temp[0])
m=int(temp[2])

i=0
while i<n:
    matrix.append(input())
    i+=1
i=0
while i<m:
    j=0
    while j<n:
        s.append(matrix[j][i])
        j+=1
    i+=1
# print(s)
pos=[]
# pos.append(i)
non_a=["!","@","#","$","%","&"," "]

while i<len(s):
# !,@,#,$,%,&
    match s[i]:
        case "!":
            pos.append(i)
        case "@":
            pos.append(i)
        case "#":
           pos.append(i)
        case "$":
            pos.append(i)
        case "%":
            pos.append(i)
        case "&":
            pos.append(i)
        case " ":
            pos.append(i)
    i+=1
i=len(s)-1
j=len(pos)-1
c=False
while i>=0:
    while not(s[i] in non_a):
        c=True
        break
    while c:
        while s[i] in non_a:
            while not(s[i-1] in non_a):
                s[i]=" "
                break
            else:
                s[i]=""
            break
        break

    i-=1
i=0
while i<len(s):
    while not(s[i]==""):
        print(s[i],end="")
        break
    i+=1
# print(str(s))

            