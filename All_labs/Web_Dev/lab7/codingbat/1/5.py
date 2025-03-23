def front_back(str):
  if len(str)>2:
    f=str[0]
    l=str[-1]
    return l+str[1:len(str)-1]+f
  elif len(str)==2:
    f=str[0]
    l=str[-1]
    return l+f
  else:
    return str
