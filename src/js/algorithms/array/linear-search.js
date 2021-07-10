console.groupCollapsed('*** Array Linear Search ***');

/**
 * Linear Search
 * @param {array} arr 
 * @param {value to be searched} val 
 * Time Complexity: O(n)
 */

const linearSearch = (arr, val) => {
    let resultIndex;

    arr.forEach((el, index) => {
        if (el === val) {
            resultIndex = index;
        }
    });

    return resultIndex || -1;
};

console.log(linearSearch([1,2,3,4,5,6], 5));
console.log(linearSearch([1,2,3,4,5,6], 10));

console.groupEnd();