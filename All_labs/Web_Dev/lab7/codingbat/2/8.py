def array123(nums):
  t_1=False
  t_2=False
  t_3=False
  i=0
  
  while i<len(nums):
    if(nums[i]==1):
      t_1=True
    if(nums[i]==2):
      t_2=True
    if(nums[i]==3):
      t_3=True
    i+=1
  if t_1 and t_2 and t_3:
    return True
  else:
    return False
