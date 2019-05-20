var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment) && map.get(compliment) !== i) {
      return [i, map.get(compliment)];
    }
  }
  console.log(map);
};
console.log(twoSum([2, 7, 11, 15], 17));
