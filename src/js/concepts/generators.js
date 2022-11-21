console.groupCollapsed('*** Generators ***');

// Async functions
// * in function keyword ; pause in function
function* countDown() {
    yield 'Get';
    yield 'Set';
    yield 'Go';
}

let start = countDown();

// start is generatorObject, which is iterable with for..of loop

// yield requires to restart function | using next()
console.log(start.next()); // value: Get | done: false
console.log(start.next().value); // value: Set | done: false
console.log(start.next().done); // value: Go | done: false
console.log(start.next()); // value: undefined | done: true

console.groupEnd();