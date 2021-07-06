console.groupCollapsed('*** Spread & Rest ***');

const hobbies = ['reading', 'programming', 'trekking'];

// this will create nested array : [['reading', 'programming', 'trekking']]
// const copiedArray = [hobbies];

// spread operator will pick object after operator and pull out items and put
// ['reading', 'programming', 'trekking'];
// Conditionally add element in array using spread: ...(condition ? [<element>] : []);
const copiedArray = [...hobbies, 'swimming', ...(true ? ['cooking'] : [])];

console.log(copiedArray);

const person = {
    name: 'Ankit',
    age: '26',
    printName() {
        console.log(`Hello ${this.name}`);
    }
}

// Spread can be used for object too
// can add conditional element with spread ...(condition ? <objectToSpread> : (<objectToSpread || {}>))
const copiedPerson = {
    ...person,
    additionalProperty: 'test',
    ...(true ? {truthy: true} : {})
}

console.log(copiedPerson);

// Rest Operator
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}
console.log('toArray ::', toArray(1,2,3));

// can pass any number or argumnents with rest operator
// will create array of arguments
const convertToArray = (...args) => {
    return args;
}

console.log('convertToArray 1::', convertToArray(1,2,3));
console.log('convertToArray 2::', convertToArray('a','b','c','d','e'));

console.groupEnd();
