def array_front9(nums):
  if len(nums)<4:
    if 9 in nums[0:len(nums)]:
      return True
    else:
      return False
  else:
    if 9 in nums[0:4]:
      return True
    else:
      return False
