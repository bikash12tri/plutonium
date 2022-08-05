const formula = new Date();

const printMonth = function() {
    let newMonth = formula.getMonth()+1;
    return("This month is "+newMonth)
}

const printDate = function() {
    let newDate = formula.getDate();
    return("Today's date is "+newDate)
}

const getBatchInfo = function() {
    return("Plutonium week3 day5, the topic for today is Nodejs module system")
}

module.exports.printMonth = printMonth;
module.exports.printDate = printDate;
module.exports.getBatchInfo = getBatchInfo;
