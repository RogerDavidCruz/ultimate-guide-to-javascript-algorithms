/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// Iterative Approach

const vowels = ["a", "e", "i", "o", "u"]

vowelsCounter = text => {
    let counter = 0

    for (letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    return counter
}

// Regular Expression Approach

vowelsCounter = text => {
    let matchingInstances = text.match(/[aeiou]/gi)
    return matchingInstances ? matchingInstances.length : s0;
}


module.exports = vowelsCounter;
