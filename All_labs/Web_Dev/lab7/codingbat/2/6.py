def array_count9(nums):
  i=0
  c=0
  
  while i<len(nums):
    if nums[i]==9:
      c+=1
    i+=1
  return c
