console.groupCollapsed('*** Challenges | max sum hr glass ***');
// Create function which accepts 2d array, with same number of rows and columns
// e.g. 1 2 3 4
//      4 5 6 7
//      8 9 9 4
//      1 2 0 8
// need to find sum of all hrglass possible and return max from them.
// HRGlass: 1 2 3   2 3 4
//            5       6
//          8 9 9 , 9 9 4

const maxSumHrGlassArray = (arr) => {
    let arrLength = arr.length;
    let maxSum;

    for (let rowIndex = 0; rowIndex < arrLength - 2 ; rowIndex++) {
        for (let colIndex = 0; colIndex < arrLength - 2; colIndex++) {
            let sum = (arr[rowIndex][colIndex] + arr[rowIndex][colIndex + 1] + arr[rowIndex][colIndex + 2]) + 
                (arr[rowIndex + 1][colIndex + 1]) + 
                (arr[rowIndex + 2][colIndex] + arr[rowIndex + 2][colIndex + 1] + arr[rowIndex + 2][colIndex + 2]);

            if (rowIndex === 0 && colIndex === 0) {
                maxSum = sum;
            }

            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
}

let arr1 = [[1,2,3,4], [4,5,6,7], [8,9,9,4], [1,2,0,8]];
console.log('Result for Arr1 :: ', maxSumHrGlassArray(arr1));

let arr2 = [[1,2,5,4,6], [4,5,0,7,9], [1,2,0,1,3], [1,2,0,4,2], [1,0,1,0,1]];
console.log('Result for Arr2 :: ', maxSumHrGlassArray(arr2));

console.groupEnd();