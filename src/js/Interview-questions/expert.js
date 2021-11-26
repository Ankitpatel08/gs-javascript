console.groupCollapsed('*** Interview questions :: expert ***');

// 1. what are closures in javascript?
// Currying
function multiply(mulby) {
    return function mulbyNum(num) {
        return num * mulby;
    }
}

const mulByTwo = multiply(2);
const mulByFive = multiply(5);
console.log(mulByTwo(25)); // 50
console.log(mulByFive(25)); // 125

// Data hiding/ Encapsulation
function counter() {
    let count = 0;
    return function increment() {
        count++;
        console.log(count);
    }
}

const incrementCounter = counter();

incrementCounter();
incrementCounter();

// 2. what is prototypal inheritance in javascript?
// Extend string object to have prepend method?
let person = {
    firstName: 'Ankit'
}

console.log(person); // prototype (__proto__)

String.prototype.prepend = function(value) {
    return value + this;
};

console.log(' ankit'.prepend('Hello'));

console.groupEnd();