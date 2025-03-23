def search_matches(str,pat):
    arr=[]
    k=len(pat)
    i=0
    while i+k<=len(str):
        if(str[i:i+k]==pat):
            arr.append(str[i:i+k])
        i+=1
    return arr
def distinct(arr):
    i=0
    while i<len(arr):
        j=i+1
        while j<len(arr):
            if(arr[j]==arr[i]):
                arr.pop(j)
            j+=1
        i+=1
    return arr
def minion_game(string):
    # your code goes here
    vowels=["A","E","I","O","U"]
    i=0
    arr=[]
    while i<len(string):
        j=i+1
        while j<=len(string):
            arr.append(search_matches(string,string[i:j]))
            j+=1
        i+=1
    arr=distinct(arr)
    # print(sorted(arr))
    arr=sorted(arr)
    i=0
    k=0
    stu=0
    
    while i<len(arr):
        if arr[i][0][0] in vowels:
            # print(arr[i][0],"vowels")
            k+=len(arr[i])
        else:
            stu+=len(arr[i])
        i+=1
    if(stu>k):
        print(f"Stuart {stu}")
    else:
        print(f"Kevin {k}")
    # print(stu,k)
        
                
                
        

if __name__ == '__main__':
    s = input()
    # print(search_matches(s,"B"))
    minion_game(s)