const removeFromArray = function(arr, ...targets) {
    for (const target of targets){
        arr = arr.filter((index) => index !== target);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
