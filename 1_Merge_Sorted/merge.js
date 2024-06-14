/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i=0,j=0;
    while(i<m+n){
        if(n==0){
          break;
        }
        else if (m==0){
            nums1[i]=nums2[j];
            i++;j++;
        }
        else{
        if(i<m){
        if(nums1[i]<=nums2[j]){
            i++;
        }
        else{
            let a=nums1[i];
            nums1[i]=nums2[j];
            nums2[j]=a;
            nums2.sort(function(a, b){return  a-b});
            console.log(nums2);
            i++;
        }}
        else{
            nums1[i]=nums2[j];
            i++;j++;
        }}
    }
};