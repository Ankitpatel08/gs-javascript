console.groupCollapsed('*** Symbols ***');

// Symbols often used as unique IDs
// Define customized iteration behavior

const id = Symbol();
const courseInfo = {
    title: 'ES6',
    topics: ['babel', 'syntax', 'Map', 'class'],
    id: 'js-course'
}

courseInfo[id] = 101;

// {title: "ES6", topics: Array(4), id: "js-course", Symbol(): 101}
console.log(courseInfo);


// Symbol.iterator
let myName = 'Ankit Patel';
let iterateIt = myName[Symbol.iterator]();

const nameIterator = setInterval(() => {
    let NameChar = iterateIt.next();

    if (NameChar.done) {
        clearInterval(nameIterator);
    } else {
        console.log(NameChar.value);
    }
}, 500);

console.groupEnd();