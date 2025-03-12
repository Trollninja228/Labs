while True:
    try:
        a=int(input("Enter the number: "))
        if(a<2):
            print("Incorrect value! Please, try again: ")
            continue
        else:
            break
    except ValueError:
        print("Incorrect value! Please, try again: ")
i=0
arr=[]
while i<a:
    arr.append(i+1)
    i+=1
print(arr)

i=0
while i<a:
    j=1
    print("\n")
    print(arr[i]," ",end="")
    while j<a:
        
        print(arr[i]*arr[j]," " , end="")
        j+=1
    
    i+=1