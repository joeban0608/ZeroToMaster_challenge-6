// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, 
// give the target number. For example: answer([1,2,3], 4)should return [1,3]
function matchTarget(arr, target) {
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        let subNum = target - arr[i]
        let hashValues = Object.values(hash)
        if (!(hashValues.includes(arr[i]))) {
            hash[i] = subNum
            // console.log(hash)
        } else if (hashValues.includes(arr[i])) {
            return [target-arr[i], arr[i]]
        }
    }
    return `there are not match numbers with target: ${target}`
}
matchTarget([1,2,3,6,9], 4)
// if 1 not in hashValue, hash[0] = 4-1 ; hash = {0:3}
// if 2 not in hashValue, hash[1] = 4-2 ; hash = {0:3, 1:2}
// if 3 in hashValue return [1, 3] // hash = {0:3, 1:2}

// 直接用array寫法
function matchTarget2(arr, target) {
    let checkTarget = []
    for (let i = 0; i < arr.length; i++) {
        let subNum = target - arr[i]
        if (!(checkTarget.includes(arr[i]))) {
            checkTarget.push(subNum)
        } else if (checkTarget.includes(arr[i])) {
            return [target-arr[i], arr[i]]
        }
    }
    return `there are not match numbers with target: ${target}`
}
matchTarget2([1,2,4,6,9], 4)
