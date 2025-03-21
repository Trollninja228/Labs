def search_matches(str,pat):
    k=len(pat)
    c=0
    i=0
    while i+k<=len(str):
        if(str[i:i+k]):
            c+=1
        i+=1
    return c

def minion_game(string):
    # your code goes here
    vowels=["A","E","I","O","U"]
    i=0
    stu=0
    k=0
    while i<len(string):
        if string[i] in vowels:
            size=0
            while size<=len(string):
                k+=search_matches(string,string[])
                
        

if __name__ == '__main__':
    s = input()
    minion_game(s)