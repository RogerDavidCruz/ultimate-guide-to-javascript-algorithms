/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// Using for-loop

longestWord = text => {
    let wordArray = text.split(' '),
    maxLength = 0,
    result = '';

    for(i = 0; i <wordArray.length; i++) {
        if(wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}

// Using .reduce() methods

longestWord = text => {
    let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) return currentWord
        else return maxLengthWord
    }, "")
    return result
}

// Using .sort() method

longestWord = text => {
    return text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]
}

module.exports = longestWord
