/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


// For...in iteration

maxRecurringChar = text => {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for(let char of text) {
        if(charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for(let char in charMap) {
        if(charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

// Forming Arrays from Character Map

maxRecurringChar = text => {
    let charMap = {}
    let charArray = []
    let valuesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if(charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }


    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharValue = Math.max(...valuesArray)


    return charArray[valuesArray.indexOf(maxCharValue)]

}


module.exports = maxRecurringChar;


/* Notes

Character Mapping

let charMap = {
    a: 3,
    b: 4,
    c: 2,
    d: 1
}

let charMap = {}
for(let char of text) {
    if(charMap.hasOwnProperty(char)) {
        charMap[char]++
    } else {
        charMap[char] = 1
    }
}
*/