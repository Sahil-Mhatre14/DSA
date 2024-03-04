var twoSum = function(nums, target) {
    const hashTable = {}
    for (let i = 0; i < nums?.length; i++) {
        console.log("hash table", hashTable);
        const currentNum = nums[i]
        const difference = target - currentNum
        if (difference in hashTable) {
            return [hashTable[difference], i]
        } else {
            hashTable[currentNum] = i
        }
    }
};

console.log(twoSum([2,7,11,15], 9))