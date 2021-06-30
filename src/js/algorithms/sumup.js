/**
 * Time Complexity: Count the number of expression executions
 */
 console.group('*** SumUp | For Loop ***');
/**
 * sumup : add numbers till limit number
 * @param {*} n : limit
 * Time Complexity: T = 1+1+n+1 = 3+1*n 
 * Asymptotic Analysis: Define Function (a*n+b) | Fastest Growing Term (a*n) | remove coefficient (n)
 * Linear Time | O(n)
 */
function sumup(n) {
    let startTime = performance.now();
    let result = 0;

    for (let index = 1; index <= n; index++) {
        result += index;
    }

    let endTime = performance.now();

    console.table({
        number: n,
        result: result,
        timeTaken: (endTime - startTime)
    });
}

sumup(1000);
sumup(1000000);
console.groupEnd();

console.group('*** SumUp | Math Equation ***');
/**
 *  sum using equation : n(n+1)/2
 *  Time Complexity: T = 1
 *  Constant Time : O(1)
 * @param {*} n limit number
 */
function sumUpEq(n) {
    let startTime = performance.now();
    let result = ((n / 2) * (n + 1));
    let endTime = performance.now();

    console.table({
        number: n,
        result: result,
        timeTaken: (endTime - startTime)
    });
}

sumUpEq(1000);
sumUpEq(1000000);
console.groupEnd();