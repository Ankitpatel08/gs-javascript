console.groupCollapsed('*** Numbers ***');
let age = 10;

console.log('Typeof age ::', typeof age); // number
console.log('print age ::', age); // 10

console.log('number + string ::', 10 + '20'); // 1020
console.log('string + number ::', '10' + 20); // 1021
console.log('number + number ::', 20 + 10 ); // 30
console.log('10 === "10" ::', 10 === '10'); // false
console.log('10 == "10" ::', 10 == '10'); // true

// Primitive wrapper objects 'N'umber
// convert string or other value to number: Returns NaN, if can't be converted
let myNum = Number('10');
console.log('typeof myNum ::', typeof myNum); //number

let strNum = Number('alpha');
console.log('strNum ::', strNum); // NaN : Not a number

console.log('10 === Number("10") :: ', 10 === Number('10')); // true

// Functions
console.log('Number.isNaN(myNum) ::', Number.isNaN(myNum)); // false
console.log('Number.isNaN(strNum)) ::', Number.isNaN(strNum)); // true
console.log('Number.parseInt("123", 2) ::', Number.parseInt('123.000'));
console.log('Number.parseInt("0xF", 16) ::', Number.parseInt('0xF', 16));
console.groupEnd();