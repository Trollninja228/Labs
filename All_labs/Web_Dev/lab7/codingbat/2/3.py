def string_bits(str):
  n_s=""
  i=0
  while i< len(str):
    if i%2==0:
      n_s+=str[i]
    i+=1
  return n_s
