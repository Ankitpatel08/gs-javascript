'use strict';
console.groupCollapsed('*** Style Guide ***');
/*
 * Style guide
 * which style to follow when multiple developers are working on same project?
 * Following common style guide helps in structuring and writing more readable code
 * Different project can have different style guides according to need 
 * 
 * Famous style guides
 * AIRBNB: https://github.com/airbnb/javascript
 * Google: https://google.github.io/styleguide/jsguide.html 
 */

/*
 * ESLint : Linting utility for javascript
 * Install Eslint package using : npm install eslint
 * configurable with .eslintrc.js 
 */

// variables
const cityName = 'Ahmedabad';
console.log(cityName);

/*
 * :: Semicolon ::
 * const userName = 'Ankit' ;;
 * const password = 'password'
 */
const user = { 
    userName: 'Ankit',
    password: 'rootforroot',
};

const makeLowerCase = (input) => {
    return String(input).toLowerCase();
};

const printUserName = ({ userName }) => {
    console.log(makeLowerCase(userName));
};

printUserName(user);

// Standardize Line Length : 100
const URLify = (title) => {
    return title.toString()
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
        .trim()
        .replaceAll(' ', '-');
};

console.log(URLify('this is $test item 1'));

// Comma Styles
let animals = [
    'cat',
    'dog',
    'tiger',
    'elephant',
    'lion',
    'turtle',
    'fish',
];

// indent consistently
const getPersonsData = () => {
    // returning promise, after 5 seconds, It resolves and send data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                let persons = [{
                    name: 'Ankit',
                }, {
                    name: 'Akshay',
                }];

                resolve(persons);
            } else {
                reject(new Error('data not found'));
            }
        }, 2000);
    });
};

// space before and after operators
let fullName = 'Ankit' + 'Patel';
let radius = 10;
let areaOfCircle = Math.PI * Math.pow(radius, 2);

// Block Styles

// OTBS : One true brace style | else statement on same line as closing brace
const getState = (city) => {
    if (city === 'Ahmedabad') {
        return 'Gujarat';
    } else {
        return 'No State Found';
    }
};

// Stroustrup Brace Style | else statement on new line
const getState1 = (city) => {
    if (city === 'Gandhinagar') {
        return 'Gujarat';
    }
    else {
        return 'No State Found';
    }
};

//  Allman Brace Style | opening statement on new line
const getState2 = (city) => {
    if (city === 'Surat') 
    {
        return 'Gujarat';
    }
    else 
    {
        return 'No State Found';
    }
};

// functions: spacing around parenthesis
const getName = () => {
    return 'Ankit';
};

function getCity() {
    return 'Ahmedabad';
}

// chained method on new line
getPersonsData()
    .then(data => {
        return data.map(element => {
            return element.name.toUpperCase();
        });
    })
    .then(data => {
        console.log('person data ::', data);
    });

console.groupEnd();
