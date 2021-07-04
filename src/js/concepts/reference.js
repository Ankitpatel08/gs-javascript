console.group('*** Reference Type ***');

// primitive type | store: stack
let name = 'Ankit';
console.log('Name ::', name); // Ankit

let secondName = name; // put value of name in second | paste
console.log('secondName ::', secondName); // Ankit

name = 'Akshay';
// call by value
console.log('print secondName after updating value of name ::', secondName); // Ankit

// reference type | store: Heap
let person = {
    name: 'Ankit',
    age: 26,
    hobbies: ['swimming', 'coding']
};

console.log('person ::', person);

// put reference of person in second person, refering same memory location
let secondPerson = person; 
console.log('second person ::', secondPerson);

person.name = 'Akshay';
// call by reference
console.log('Second person after updating person.name ::', secondPerson);

// copy properties of person, create new object
let thirdPerson = Object.assign({}, person);
// won't affect thirdPerson
person.name = 'Ankur';

// Array is reference type, still refering old person.hobbies
// hobbies gets updated in third person
person.hobbies.push('Trekking');
console.log('thirdperson; created with Object.assign:: ', thirdPerson);

// Array
let firstList = ['Ankit', 'Akshay'];
console.log('Names ::', firstList); // ['Ankit', 'Akshay']

let secondList = firstList; // put reference of firstList
let thirdList = firstList.slice(); // copy value of array

firstList.push('Pinal');

console.log('secondList ::', secondList); // ['Ankit', 'Akshay', 'Pinal']
console.log('thirdList ::', thirdList); // ['Ankit', 'Akshay']


console.groupEnd();