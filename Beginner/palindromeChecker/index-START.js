/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// Reversed string (intu)
palindromeChecker = text => {
    let reversedText = text.toLowerCase().split('').reverse().join('')
    return text === reversedText
}

// Looping through and comparing characters
palindromeChecker = text => {
    let charArray = text.toLowerCase().split('')
    let result = charArray.every((letter, idx) => letter === charArray[charArray.length - idx - 1])
    return result 
}

// Looping through and comparing characters (optimized)
palindromeChecker = text => {
    let textLen = text.length
    for(let i = 0; i < textLen/2; i++) {
        if(text[i] !== text[textLen - 1 - i]) return false
    }
    return true
}


module.exports = palindromeChecker;