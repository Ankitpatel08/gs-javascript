console.groupCollapsed('*** Closure ***');
// closed over variable
// used for data encapsulation & in currying

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

console.groupEnd();