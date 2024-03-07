let nums = [11,33,45,656,8898,1,15,66];

const f = (index) => {
  return index < 0 ? 0 : nums[index] + f(index - 1)
}

const getSUm = (nums) => {
  return f(nums.length - 1)
}

console.log(getSUm(nums));
