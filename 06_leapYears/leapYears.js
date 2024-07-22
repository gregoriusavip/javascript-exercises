const leapYears = function(year) {
    if (typeof year !== "number") return false;

    if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
