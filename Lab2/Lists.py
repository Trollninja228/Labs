'''
List is a collection which is ordered and changeable. Allows duplicate members.
Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
Set is a collection which is unordered, unchangeable*, and unindexed. No duplicate members.
Dictionary is a collection which is ordered** and changeable. No duplicate members.
'''
li=["acroba",'bravo','comrado',15321,11.5,12j]
print(li)
print(len(li))
print(li[1])
print(li[-1])
print(li[-3:-1])
if 12j in li:
    print("It have complex")
li[3]=120
li[0:3]=['slay','the','dragon']
li.insert(0,"You need")
li.append("- Code for locked safe")
print(li)
li1=['[DATA', 'DELETED]','Please safe my fami...']
li.extend(li1)
print(li)
li.remove(12j)
li.pop(5)
del li[8]
print(li)
del li1     # delete all list 
#or
#li1.clear()
for x in li:
    print(x)
print("")
for i in range(len(li)):
  print(li[i])
n=0
while n < len(li):
  print(li[n])
  n = n + 1
nli=[]
print("New list:")
li.remove(120)
for x in li: # or newlist = [x for x in fruits if "a" in x], правда второй варик пока не сильно понимаю
   if 'a' in x:
      nli.append(x)
print(nli)
nli.clear()
nli=[x for x in li if x =="DELETED]" or x=="[DATA"]# хотя вроде разобрался
print(nli)
nli.clear()
nli=[x for x in range(25) if x%2==0 and x!=0]
print(nli)
nli.clear()
nli=[x.upper() for x in li]
print(nli)
nli.clear()
nli=["DELETED" for x in li]
print(nli)
nli.clear()
nli=[x if x!="[DATA" else "DELETED]" for x in li]
print(nli)
nli.clear()
nli=[1,2,3,4,5,6,156132,3213,-32,4556]
nli.sort()
print(nli)
nli.reverse()
print(nli)
def Nth(z): # функция возвращающая занчение, которое значит на сколько далеко число от 3000
   return abs(z-3000)
nli.sort(key=Nth)# для сортировки можно задать параметр чере функцию
print(nli)
nli=li.copy()#мы не можем писать nli=li, так как тогда мы по сути просто присвоим строке li ещё одно имя nli. Изменения в одной будут влиять на другую
#or nli=list(li)
nli.clear()
nli=[1,2,3,4,5,6,156132,3213,-32,4556]
li1=li+nli
print(li1)