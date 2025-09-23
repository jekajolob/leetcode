// https://leetcode.com/problems/search-insert-position/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0
    for(i = 0; i <= nums.length - 1; i++){
        if (nums[i] == target){
            return i
        }
        else if(nums[i] > target){
            return i 
        }
        
    }
    return i
    //return index

    
};

console.log(searchInsert([1,3,5,6], 5)) // 2
console.log(searchInsert([1,3,5,6], 2)) // 1
console.log(searchInsert([1,3,5,6], 7)) // 4
