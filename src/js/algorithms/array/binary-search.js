console.groupCollapsed('***Array: Binary Search ***');

/**
 * Binary Search : divide array from middle and compare middle with value
 * if middle > value : repeat same for array before middle
 * if middle < value : repeat same for array after middle
 *
 * @param {Sorted Array} arr
 * @param {value to be searched} val
 * Time Complexity : O(log n)
 */
const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === val) return middle;
    
        if (arr[middle] > val) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 8));

console.groupEnd();