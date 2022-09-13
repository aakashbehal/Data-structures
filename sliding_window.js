//Given an array, find the average of all contiguous subarrays of size K in it.
const findSubArray = (arr, k) => {

    // Brute force
    // const result = [];

    // for (let i = 0; i < arr.length - k + 1; i++) {
    //     let sum = 0
    //     for (let j = i; j < i + k; j++) {
    //         sum += arr[j]
    //     }
    //     result.push(sum / k)
    // }

    // console.log(result);

    // sliding window technique
    const result = [];
    let windowStart = 0;
    let windowSum = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if (windowEnd >= k - 1) {
            result.push(windowSum / k);
            windowSum -= arr[windowStart];
            windowStart
        }
    }

    console.log(result)

}

//[2, 1, 5, 1, 3, 2]
//Given an array of positive numbers and a positive number K, find the maximum sum of any contiguous subarray of size K.
const maxSumSubArray = (arr, k) => {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        if (windowEnd >= k - 1) {
            maxSum = Math.max(windowSum, maxSum)
            windowSum -= arr[windowStart];
            windowStart++
        }

    }
    console.log(maxSum)
}

const smallestSubarrayWithGivenSum = (arr, s) => {
    let windowSum = 0
    let minLength = Infinity;
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        while (windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1)
            windowSum -= arr[windowStart];
            windowStart++
        }
    }
    if (minLength === Infinity) {
        return 0
    }
    return minLength
}

// "araaci", 2
const longestSubstringWithKDistinct = (str, k) => {

    let windowStart = 0;
    let maxLength = 0;
    let charFrequency = {}

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {

        let char = str[windowEnd]
        if (!charFrequency[char]) {
            charFrequency[char] = 0
        }
        charFrequency[char]++

        while (Object.keys(charFrequency).length > k) {
            const startChar = str[windowStart];
            charFrequency[startChar]--
            if (charFrequency[startChar] === 0) {
                delete charFrequency[startChar]
            }
            windowStart++
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength
}

const totalFruit = (fruits) => {
    let windowStart = 0;
    let charFreq = {};
    let maxLength = 0;

    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        let fruit = fruits[windowEnd]
        if (!charFreq[fruit]) {
            charFreq[fruit] = 0
        }
        charFreq[fruit]++
        while (Object.keys(charFreq).length > 2) {
            let startChar = fruits[windowStart];
            charFreq[startChar]--
            if (charFreq[startChar] === 0) {
                delete charFreq[startChar]
            }
            windowStart++
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength
}

const nonRepeatSubstring = (str) => {
    let windowStart = 0;
    let maxLength = 0;
    let charIndexMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let endChar = str[windowEnd];
        if (endChar in charIndexMap) {
            windowStart = Math.max(windowStart, charIndexMap[endChar] + 1)
        }
        charIndexMap[endChar] = windowEnd
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength
}

module.exports = {
    findSubArray,
    maxSumSubArray,
    smallestSubarrayWithGivenSum,
    longestSubstringWithKDistinct,
    totalFruit,
    nonRepeatSubstring
}