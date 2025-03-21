
def distinct( s):   
    s=list(s)
    if(len(s)>1):
        i=0
        while i< len(s):
            j=i+1
            while j<len(s):
                # print(s[i],s[j])
                if s[i]==s[j]:
                    
                    s.pop(j)
                    j-=1
                j+=1
            # print()
            i+=1
    return "".join(s)


s=input()
k=int(input())

i=0
arr=[]
while i<len(s):
    if(i+k<len(s)):
        arr.append(s[i:i+k])
    else:
        arr.append(s[i:(len(s))])
        break
    i+=k

i=0
while i<len(arr):
    print(distinct(arr[i]))
    i+=1

