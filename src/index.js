module.exports = function check(str, bracketsConfig) {
    let count = 0;
    while (count < bracketsConfig.length) {
        let kindOfBracket = bracketsConfig[count].join('');
        if (str.includes(kindOfBracket)) {
            str = str.replace(kindOfBracket, '');
            count = 0;
        } else {
            count++;
        }
    }
    return !str.length;
};
