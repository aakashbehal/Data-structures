const sliding_window = require('./sliding_window');


// Sliding Window
// sliding_window.findSubArray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)
// sliding_window.maxSumSubArray([2, 1, 5, 1, 3, 2], 3)
// let result = sliding_window.smallestSubarrayWithGivenSum([2, 1, 5, 2, 8], 7)
// let result = sliding_window.longestSubstringWithKDistinct("araaci", 2)
// let result = sliding_window.totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])
let result = sliding_window.nonRepeatSubstring("aabccbb")


console.log("final result ----------", result)