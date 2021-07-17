console.groupCollapsed('*** Challenges | Array ***');
// find longest string from array
const findLongestString = (arr) => {
    if (arr.length === 0) {
        return new Error('No string in array');
    }

    let longestStr;
    for (let index = 0; index < arr.length ; index++) {
        if(index === 0) {
            longestStr = arr[index];
        }

        if (arr[index].length > longestStr.length) {
            longestStr = arr[index];
        }
    }

    return longestStr;
}

console.log(findLongestString(['hi', 'hello', 'how are you?']));
console.groupEnd();