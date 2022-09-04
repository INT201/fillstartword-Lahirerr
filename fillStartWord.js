const { template } = require('@babel/core')


function fillStartWord(startWord, word) {
    if(word === undefined || word === null){
    return undefined
    } else if(word.includes(startWord)){
      return word
    }
    return startWord+word
}
console.log(fillStartWord("1-2565-","Hello World"))
console.log(fillStartWord("first","firststep"))


module.exports = fillStartWord
