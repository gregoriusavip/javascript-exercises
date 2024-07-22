const reverseString = function(str) {
    if (str.length === 0 || str.length === 1){
        return str;
    }
    let left = 0;
    let right = str.length - 1;
    const res = new Array(str.length);
    while (left <= right){
        if (left !== right){
            res[left] = str[right];
            res[right] = str[left];
        }
        else {
            res[left] = str[left];
        }
        left++;
        right--;
    }
    return res.join("");
};

// Do not edit below this line
module.exports = reverseString;
