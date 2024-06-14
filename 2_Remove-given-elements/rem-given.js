/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var l=nums.length;
    nums.sort(function(a,b){return a-b;});
    var findex=nums.indexOf(val);
    
    var lindex=nums.lastIndexOf(val);
    
    if(findex!=-1){
    nums.splice(findex,lindex-findex+1);}
    
    
    return nums.length;
};