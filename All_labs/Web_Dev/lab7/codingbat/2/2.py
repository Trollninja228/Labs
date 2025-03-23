def front_times(str,n):
  if(len(str)>3):
    str=str[0:3]
  i=0
  n_s=""
  while i<n:
    n_s+=str
    i+=1
  return n_s