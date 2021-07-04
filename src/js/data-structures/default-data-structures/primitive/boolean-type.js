console.groupCollapsed('*** Boolean ***');

/**
 * Boolean: true | false
 */
let flag = true;
console.log('typeof ::', typeof flag); // boolean

let notNot = !!10;
console.log('!! to convert to boolean ::', notNot); // true

let boolWrapper = new Boolean(0);
console.log('typeof | new Boolean ::', typeof boolWrapper); //object

// falsy values
let boolEmpty = Boolean(); // false
let boolZero = Boolean(0); // false
let boolMinusZero = Boolean(-0); // false
let boolNaN = Boolean(NaN); // false
let boolNull = Boolean(null); // false
let boolUndefined = Boolean(undefined); // false

console.table({
    'empty': boolEmpty,
    'zero': boolZero,
    'minusZero': boolMinusZero,
    'NaN': boolNaN,
    'null': boolNull,
    'undefined': boolUndefined
});

// truthy values
let boolString = Boolean('Hello'); // true
let boolNumber = Boolean(10); // true
let boolTrue = Boolean(true); // true
let boolArray = Boolean([]); // true
let boolObject = Boolean({}); // true

console.table({
    'string': boolString,
    'number': boolNumber,
    'true': boolTrue,
    'Array': boolArray,
    'object': boolObject
});

console.groupEnd();