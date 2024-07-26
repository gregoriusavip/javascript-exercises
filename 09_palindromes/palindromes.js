function isAlphaNumerical(char){
    return ((char > 96 && char < 123) || (char > 47 && char < 58)) ? true : false;
}

const palindromes = function (string) {
    if (string.length === 0){
        return true;
    }
    let l = 0;
    let r = string.length - 1;
    const lowercase = string.toLowerCase();
    while (l < r){
        if (!isAlphaNumerical(lowercase.charCodeAt(l))){
            l += 1;
            continue;
        }
        if (!isAlphaNumerical(lowercase.charCodeAt(r))){
            r -= 1;
            continue;
        }
        if (string[l].toLowerCase() !== string[r].toLowerCase()){
            return false;
        }
        l += 1;
        r -= 1;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
