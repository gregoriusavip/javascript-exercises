const sumAll = function(intOne, intTwo) {
    if(typeof intOne !== "number" 
        || typeof intTwo !== "number" 
        || intOne < 0 
        || intTwo < 0 
        || !Number.isInteger(intOne) 
        || !Number .isInteger(intTwo)){
        return 'ERROR';
    }
    let larger = intTwo;
    let smaller = intOne;
    if (intOne > intTwo){
        larger = intOne;
        smaller = intTwo;
    }
    let res = 0;
    while (larger >= smaller){
        res += smaller;
        smaller++;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
