console.groupCollapsed('*** Challenges | Array ***');
// find longest string from array
const findLongestString = (arr) => {
    if (arr.length === 0) {
        return new Error('No string in array');
    }

    let longestStr = arr[0];
    for (let index = 0; index < arr.length ; index++) {
        if (arr[index].length > longestStr.length) {
            longestStr = arr[index];
        }
    }

    return longestStr;
}

console.log(findLongestString(['hi', 'hello', 'how are you?']));

// Sort objects with given property: compare-function in sort
const sortObjects = (arr, prop) => {
    return arr.sort((a,b) => a[prop] > b[prop] ? 1 : -1);
}

console.log(sortObjects([{name: 'test', age: 20}, {name: 'quest', age: 21}, {name: 'jest', age: 27}], 'name'));

// implementation for isArray
Array.prototype.isArray = function(arg) {
    if (typeof arg === 'object' &&
    ('join' in arg && typeof arg.join === 'function') && 
    ('length' in arg && typeof arg.length === 'number')) {
        return true;
    }
    return false;

    // ECMAScript 5.1 implementation
    // return Object.prototype.toString.call(arg) === '[object Array]';
}

console.groupEnd();