const sumAll = function(min, max) {
    if(typeof min !== "number" 
        || typeof max !== "number" 
        || min < 0 
        || max < 0 
        || !Number.isInteger(min) 
        || !Number .isInteger(max)){
        return 'ERROR';
    }
    if (min > max) [min, max] = [max, min];
    return ((max*(max+1))-(min*(min-1)))/2;
};

// Do not edit below this line
module.exports = sumAll;
