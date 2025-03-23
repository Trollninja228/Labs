def last2(str):
  if len(str)<=2:
    return 0
  else:
    t=str[-2:]
    c=0
    i=0
    while i<len(str)-2:
      if(str[i:i+2]==t):
        c+=1
      i+=1
  return c
