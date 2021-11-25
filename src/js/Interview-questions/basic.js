console.group('*** Interview questions :: basic ***');

// 1. what is the main difference between array methods: forEach and map?
const numbers = [10, 20, 30, 40];

let arrForEach = numbers.forEach(num => num * 2);
let arrMap = numbers.map(num => num * 2);

console.log('Array :: forEach returns :: ', arrForEach); // undefined
console.log('Array :: map returns :: ', arrMap); // [20, 40, 60, 80]

// 2. what is this in javascript?
// what this line will return "console.log(this)"?
console.log(this); // Window object!

// 3. write function to find sum of number 1 to n
const sumN = (n) => {
    let result = 0;

    for (let index = 1; index <= n; index++) {
        result += index;
    }

    return result;
}

console.log(sumN(10));

const sumNEq = n => ((n / 2) * (n + 1));
console.log(sumNEq(100));

console.groupEnd();