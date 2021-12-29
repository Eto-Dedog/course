'use strict';

const max = (arg) => {
    let res = 'Ожидается появление строки...';
    if (typeof arg === "string") {
        const maxLength = 30;
        const str = arg.trim();
        if (str.length > maxLength) {
            res = str.substr(0,maxLength) + '...';
        } else {
            res = str;
        }
    }
    return res;
};

console.log('max(): ', max(5));
console.log('max(): ', max('    Строка менее 30 символов     '));
console.log('max(): ', max('    Строка более 30 символов - уауауауауауауауауауауауауауауауауауауауауауауауауауауауауауа!'));