console.group('*** SumArray | For Loop ***');
/**
 * Calculate the sum of array of numbers e.g. [1,2,5] = 8
 * Time Complexity: O(n) | Linear
 */
function sumArray(numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    // result = numbers.reduce((sum, curNum) => sum + curNum, 0);

    console.table({
        input: numbers.toString(),
        result: result
    });
}

sumArray([1, 5, 6]);
sumArray([2, 4, 6, 8]);
console.groupEnd();
