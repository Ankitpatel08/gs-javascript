console.groupCollapsed('*** Null ***');

/**
 * Null: Intentional absense of any object value; trated false in boolean expression
 */
let nullPrimitive = null;

console.log('value ::', nullPrimitive);
console.log('typeof ::', typeof nullPrimitive);

let myObject = {
    data: null,
    emptyArray: []
};

if (myObject.data) { // falsy
    console.log('This won\'t get displayed :: null');
} else if(myObject.emptyArray) { //truthy
    console.log('This will get displayed :: []');
}

// Compare: undefined | null
console.log('null === undefined ::', null === undefined); // false
console.log('null == undefined ::', null == undefined); // true
console.log('null === null ::', null === null); // true
console.log('null == null  ::', null == null); // true
console.log('!null ::', !null); // true

console.groupEnd();