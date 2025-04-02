def add(a,b):
    return a+b

def substract(a,b):
    return a-b

def multiplicate(a,b):
    return a*b

def divide(a,b):
    return a/b


print("Enter 2 values and action")

a=int(input("Enter number a:"))
b=int(input("Enter number b:"))

act=input("Choose 1(add), 2(substract),3(multiplicate),4(divide)")

if act=='1':
    print(add(a,b))
elif act=='2':
    print(substract(a,b))
elif act=='3':
    print(multiplicate(a,b))
else:
    print(divide(a,b))

