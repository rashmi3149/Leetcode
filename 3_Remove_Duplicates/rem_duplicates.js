/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const nums_temp=new Set(nums);
    var i=0;
    for (const x of nums_temp) {
      nums[i]=x;i++;
    }
    return i;
};