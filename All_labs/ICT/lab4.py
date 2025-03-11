import random
import math


# Task 1


# def to_Celsius(t):
#     return (t-32)*5/9

# def to_Fahrenheit(t):
#     return (t*9/5)+32

# a=float(input("Enter temperature: "))
# b=input("Enter conversion direction. C for Celsius to Fahrenheit, F for Fahrenheit to Celsius :")
# if(b=="C"):
#     print(to_Fahrenheit(a))
# else:
#     print(to_Celsius(a))


# Task 2


# b=random.randint(1,100)
# print("Let's play the game! If you want to skip this, press 'q'")

# while True:
#     try:
#         a=input("Enter the number: ")
#         if a!="q":
#             a=int(a)
#         else:
#             print("Bye!")
#             break
#     except ValueError:
#         print("Incorrect value! Please, try again: ")
#         continue
    
#     if(a==b):
#         print("Correct, you win!!")
#         break
#     elif a<b:
#         print("Too low!")
#     else:
#         print("Too high!") 
        
        
# Task 3


# while True:
#     try:
#         a=int(input("Enter the number: "))
#         if(a<1):
#             print("Incorrect value! Please, try again: ")
#             continue
#         else:
#             break
#     except ValueError:
#         print("Incorrect value! Please, try again: ")
    
# i=0
# b=1
# c=0
# while c<a:
#     c+=1
#     print(i)
#     if(i==0):
#         i+=1
#         print(i)
#     else:
#         i+=b
#         b=i-b


# Task 4

# a = {
#     "t-shirt":2000,
#     "shirts":2200,
#     "socks":500,
#     "boots":5000,
#     "hat":3000
# }
# total=0
# for item in a.keys():
#     print(item, a.get(item))
#     total+=a[item]
# print("Total:", total)


# Task 5

# a = input("Enter your sentence: ")
# a=set(a.split(" "))
# # for key in a:
# #     print(key)
# print(len(a))

# Task 6

# while True:
#     try:
#         a=int(input("Enter the number: "))
#         if(a<2):
#             print("Incorrect value! Please, try again: ")
#             continue
#         else:
#             break
#     except ValueError:
#         print("Incorrect value! Please, try again: ")

# i = 2
# g=True
# while i<= math.sqrt(a):
#     if(a%i==0):
#         print("Not prime!")
#         g=False
#         break
#     i+=1
# if(g):
#     print("Prime!")

# Task 7

def add():
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))
    print("Result:", a + b)

def subtract():
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))
    print("Result:", a - b)

def multiply():
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))
    print("Result:", a * b)

while True:
    print("Menu:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Exit")

    choice = input("Select an option (1-4): ")

    if choice == "1":
        add()
    elif choice == "2":
        subtract()
    elif choice == "3":
        multiply()
    elif choice == "4":
        print("Exiting...")
        break
    else:
        print("Invalid choice, please enter a number between 1 and 4.")
