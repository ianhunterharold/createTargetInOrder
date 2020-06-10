/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let target= [];
  
  for (let i = 0; i <nums.length;i++){
      let insertAt = target.splice(index[i],0,nums[i])
  }
  
  return target;
};

//solve as human 
// nums is full of numbers in order
// index is array of indexed locations

// move through both numbers and index at the same character
// insert into target array the number at the indexed location 
// return target array 

