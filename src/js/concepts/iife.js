// IIFE: Immediately invoked Function Expression
// runs as soon as it is defined
// Use Cases: Avoid polluting Global namespace

console.groupCollapsed('*** IIFE ***');
(function() {
    let someVariable = 'test';

    console.log(someVariable);
})();

// someVariable is not defined
// console.log(someVariable);

console.groupEnd();