// https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString()
    let rev = ''
    for(i = x.length - 1; i >= 0; i--){
        rev+=x[i]
    }
    if(rev === rev.split('').reverse().join('')){
        return true
    }else{
        return false
    }
};

console.log(isPalindrome(121)) //true
console.log(isPalindrome(-121)); // false
