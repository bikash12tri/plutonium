const word = "    FunctionUp    "
const word2 = "I am the student of plutonium cohort"

const triming = function() {
    let removeSpace = word.trim()
    return(removeSpace)
}

const lowerCase = function() {
    let lower = word2.toLowerCase()
    return(lower)
}

const upperCase = function() {
    let upper = word2.toUpperCase()
    return(upper)
}

module.exports.triming = triming;
module.exports.lowerCase = lowerCase;
module.exports.upperCase = upperCase;
