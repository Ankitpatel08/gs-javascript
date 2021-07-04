console.groupCollapsed('*** String ***');
let name = 'Ankit';
console.log('Type of name ::', typeof name);

// Immutable primitive
name.toUpperCase();
console.log('after toUpperCase() ::', name); // Ankit
name = name.toLowerCase();
console.log('assign new value with lowerCase ::', name); // ankit

// String wrapper Object
let strPrimitive = 'test string';
let strObject = new String(strPrimitive);
console.log('typeof strPrimitive :: ', typeof strPrimitive); // string
console.log('typeof strObject :: ', typeof strObject); // Object

// instance property : length
console.log('property length ::', strObject.length); // 11

// functions
console.log('includes ::', strObject.includes('test')); // true
console.log('indexOf ::', strObject.indexOf('test1')); // -1

let num = 123;
console.log('typeof num ::', typeof num); // number
console.log('toString ::', typeof num.toString()); // string

console.groupEnd();