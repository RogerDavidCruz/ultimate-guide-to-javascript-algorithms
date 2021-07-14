/*
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, 
perform a search and replace on the sentence using the arguments provided and return the 
new sentence. E.g

*/

// Using .replace

searchReplace = (str, word, newWord) => {
    if(word[0] === word[0].toUpperCase()) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }
    return str.replace(word, newWord)
}

module.exports = searchReplace