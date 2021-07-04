console.groupCollapsed('*** Undefined ***');

// Reference Error : x is not defined
// console.log('variable used before init :: ', x);

{
    let x; // Reference error if used before
    // var x; undefined if used before
    console.log('Value of x ::', x);
    console.log('Type of x ::', typeof x);

    console.log('compare: typeof x ===  "undefined" ::', typeof x === 'undefined'); // true
    console.log('compare: typeof x ==  "undefined" ::', typeof x == 'undefined'); // true
    console.log('compare: x === undefined ::', x === undefined); // true
    console.log('compare: x === void 0 ::', x === void 0); // true
}

console.groupEnd();