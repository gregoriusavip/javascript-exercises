const repeatString = function(inputStr, repeatCounter) {
    if (repeatCounter < 0){
        return "ERROR";
    }
    let outputStr = ""
    while (repeatCounter !== 0){
        outputStr += inputStr;
        repeatCounter--;
    }
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
