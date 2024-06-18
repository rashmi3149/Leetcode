/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (var i=0;i<nums.length;i++){
       var last=nums.lastIndexOf(nums[i])+1;
       if(last-i >=2){
        if(last-i == 2) i++;
        else{
            i++;
            nums.splice(i+1,last-i-1);
        }
       }
    }
};