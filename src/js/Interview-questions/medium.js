console.groupCollapsed('*** Interview questions :: medium ***');

// 1. write code snippet to determine if string is palindrom or not?
// what if we pass null as parameter?
const isPalindromString = (str) => {
    if (str && typeof str === 'string') {
        let tempStr = str;
        let reverseStr = str.split('').reverse().join('');
    
        return (tempStr === reverseStr);
    } else {
        return false;
    }
}

// 2. write a function to determine if passed parameter is array?
const isArray = (arg) => {
    if (typeof arg === 'object' &&
    ('join' in arg && typeof arg.join === 'function') &&
    ('length' in arg && typeof arg.length === 'number')) {
        return true;
    }
    return false;

    // ECMAScript 5.1 implementation
    // return Object.prototype.toString.call(arg) === '[object Array]';
}

// 3. what will be the type of err in below code snippet?
try {
    throw 'error';
} catch(err) {
    console.log(err, typeof err);
}

console.groupEnd();