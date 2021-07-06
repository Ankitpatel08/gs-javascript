console.groupCollapsed('*** Destructuring ***');

const person = {
    name: 'Ankit',
    age: 26,
    hobbies: ['swimming', 'programming']
}

// Only use property :: name from person object
const printName = ({ name }) => {
    console.log('Name ::', name);
}

printName(person);

// use property while destructuring object, here age, hobbies
const { age, hobbies } = person;

console.log('age, hobbies ::', age, hobbies);

// use any variable name while destucturing array
const [first, second] = hobbies;
console.log('Array Destructuring :: ', first, second);

console.groupEnd();