// var majorityElement = function(nums) {
//     var hashMap = {}
//     for (var i = 0; i < nums.length; i++) {
//         if (hashMap[nums[i]]) {
//             console.log("inside if");
//             hashMap[nums[i]] = hashMap[nums[i]] + 1
//         } else {
//             hashMap[nums[i]] = 1
//         }
//     }
//     console.log(hashMap)

//     var largestCount = 0
//     var res = nums[0]

//     for (var num in hashMap) {
//         if (hashMap[num] > largestCount) {
//             largestCount = hashMap[num]
//             res = num
//         }
//     }
//     return res
// }

var majorityElement = function(nums) {
    var count = 0;
    var res = 0

    for (var num of nums) {
        if (count === 0) {
            res = num
        }
        count = res === num ? count + 1 : count - 1
    }
    return res
}

console.log("Majority element: ", majorityElement([3,2,3]))