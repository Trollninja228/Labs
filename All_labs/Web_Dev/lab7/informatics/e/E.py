import math

def is_prime(a):
    i=2
    while i<math.sqrt(a):
        if(a%i==0):
            return "composite"
        i+=1
    return "prime"

print(is_prime(int(input())))