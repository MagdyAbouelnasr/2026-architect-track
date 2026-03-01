// Problem 1: Two Sum
// Pattern:
// Time Complexity:
// Space Complexity:

function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
}


console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6));   // [0,1]
console.log(twoSum([-1, -2, -3, -4, -5], -8)); // [2,4]

function twoSumOptimized(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i);
    }
}

console.log(twoSumOptimized([3,2,4], 6)) // [1,2]
console.log(twoSumOptimized([3,3], 6))   // [0,1]
console.log(twoSumOptimized([-1,-2,-3,-4,-5], -8)) // [2,4]


// Problem 2: Contains Duplicate
// Pattern:
// Time Complexity:
// Space Complexity:
