var rotate = function(nums, k) {
    var result = []
    for (var i = 0; i < nums.length; i++) {
        var targetIndex = (i+k) % nums.length
        console.log('target index', targetIndex);
        result[(i+k) % nums.length] = nums[i]
    }
    return result
};

console.log("Rotated array", rotate([1,2,3,4,5,6,7], 3));