/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// Chaining in-built methods

reverseString = text => text.split('').reverse().join('')

// ... With ES6 spread operator

reverseString = text => [...text].reverse().join('')


// For-Loop Way

reverseString = text => {
    let result = ""

    for(let char of text) {
        result = char + result
    }

    return result
}

// Recursive Way*

function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}


// Reduce*

function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, '')
}

module.exports = reverseString