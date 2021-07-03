console.group('*** Recursion ***');
/**
 * Recursive function: Function calls itself, untill it doesn't
 * always have condition to stop; else will go in infinite loop
 * @return {*} 
 */
function recurse() {
    // ...do something here

    // needs condition to stop calling it
    if (true) { 
        recurse();
    }
}

console.log('*** countDown ***');
function countDown(limit) {
    // print value
    console.log(' :: ', limit);

    // decrease number by 1
    limit -= 1; // 9, 8, 7, 6, 5, 4, 3, 2, 1

    // stop if number less than 0
    if (limit > 0) {
        // call function again for limit - 1
        countDown(limit);
    }
}

countDown(10);

console.log('*** Fibonaci till 100 ***');
function printFibonaci(startEl = 0, secondEl = 1) {
    let nextEl = startEl + secondEl; // 0+1

    // print element
    console.log(' :: ', startEl);

    if (secondEl <= 100) {
        // moving reference from second to start and next to second
        startEl = secondEl; // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
        secondEl = nextEl; // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
        printFibonaci(startEl, secondEl);
    }
}

printFibonaci();

console.groupEnd();