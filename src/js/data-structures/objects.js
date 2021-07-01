console.groupCollapsed('*** Objects ***');
/**
 * Unordered key:value pairs, value access via key; key needs to be unique, not iterable
 * keys have to be strings, numbers, Symbols
 * Objects can have methods
 * Object.key = value | value = Object.key | delete object.key
 */
const person = {
    name: 'Ankit',
    hobbies: ['coding', 'swimming'],
    printName() {
        console.log('My name is ::', this.name);
    }
}
// Add new property
person.age = 26;
console.table(person);

// delete property
delete person.age;
console.table(person);

console.log(person.hobbies);

//function in object
person.printName();

console.groupEnd();