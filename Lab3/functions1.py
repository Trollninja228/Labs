def gramm_to_ounc(g):
  return 28.3495231*g
print(gramm_to_ounc(20))
def Celsia(F):
  return (5/9) * (F-32)
print(Celsia(98))
def solve(numheads, numlegs):
  k=2*numheads
  r=(numlegs-k)/2
  ch=numheads-r
  return ch,r
print(solve(35,94))
def filter_prime(s):
        i=0
        while i<len(s):
            j=2
            while j<(s[i]):
                if s[i]%j==0:
                    del s[i]
                    i-=1
                    break
                j+=1
            i+=1
        return s
list=[123,13,17,3,5,9,21,31,51,41]
print(filter_prime(list))
from itertools import permutations
def print_permutations(s):
    prms = permutations(s)
    for prm in prms:
        print(''.join(prm))
s="Sample"
print_permutations(s)
"""def reverse():     #мешается
  s=input()
  i=len(s)
  w=len(s)
  while i>-1:
    i-=1
    if s[i]==" ":
      print(s[i+1:w])
      w=i
    if i==0:
      print(s[:w])
reverse()"""
def has_33(n):
    i=0
    while i<(len(n)-1):
      if n[i]==3 and n[i+1]==3:
        print(True)
        return 0
      i+=1
    print(False)

has_33([1, 3, 3])
has_33([1, 3, 1, 3])
has_33([3, 1, 3])

def spy_game(n):
    i=0
    while i<(len(n)-2):
      if n[i]==0 and n[i+1]==0 and n[i+2]==7:
        print(True)
        return 0
      i+=1
    print(False)

spy_game([1,2,4,0,0,7,5])
spy_game([1,0,2,4,0,5,7])
spy_game([1,7,2,0,4,5,0]) 
def Volume_sph(r):
  print(3.14*(r**3)*4/3)
Volume_sph(4)
def Unique(l):
  i=0
  while i<len(l)-1:
    j=i+1
    while j<len(l):
      q=1
      if l[i]==l[j]:
        l=l[:j]+l[j+1:]
        q=0
      if q:
        j+=1
    i+=1
  print(l)
test_li="Testttes"
Unique(test_li)
def palindrome(s):
   i=0
   j=len(s)-1
   while i<len(s):
      if not s[i]==s[j]:
         return False
      i+=1
      j-=1
   return True
s="ababa"
s1="abca"
print(palindrome(s))
print(palindrome(s1))
def histogram(li):
   i=0
   while i<len(li):
      s=""
      j=0
      while j<li[i]:
         j+=1
         s+="*"
      print(s)
      i+=1
histogram([4, 9, 7])
import random
def game():
   print("Hello! What is your name?")
   name=input()
   number=random.randint(1,20)
   print("Well, "+name+", I am thinking of a number between 1 and 20.")
   print("Take a guess.")
   n=int(input())
   i=0
   while not n==number:
      i+=1
      if(n<number):
         print("Your guess is too low.")
         print("Take a guess.")
      else:
         print("Your guess is too high.")
         print("Take a guess.")
      n=int(input())
   i+=1
   print("Good job, "+name+"! You guessed my number in",i,"guesses!")
game()