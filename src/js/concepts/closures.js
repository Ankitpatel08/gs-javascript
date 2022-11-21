console.groupCollapsed('*** Closure ***');
// closed over variable
// used for data encapsulation & in currying

console.log('***Variable Scoping***');
let globalVar = 'global variable';
function outer() {
    let outerVar = 'outer function variable';
    function inner() {
        let innerVar= 'inner function variable';
        console.table({
            'global': globalVar,
            'outer': outerVar,
            'inner': innerVar
        });
    }
    inner();
}
outer();

console.log('***currying***');

function add(lexicalNum) {
    return function(num) {
        return num + lexicalNum;
    }
}

let addByTwo = add(2);
console.log(addByTwo(5)); // 7

let addByFive = add(5);
console.log(addByFive(5)); // 10;

console.log(add(2)(3)); // 5

console.log('***counter using closure***');
// Counter using closure
function counter() {
    let counter = 0;

    return function increment() {
        counter++;
        console.log(counter);
    }
}

const increment = counter();

increment();
increment();
increment();

console.groupEnd();