'use strict';

console.groupCollapsed('*** Best Practices: Data ***');

const city = 'Ahmeadabad';
console.log('City ::', city);

/**
 * use let/const to declare variable instead of var
 * Bad:: var abc;
 * Not going to be reassigned, use const
 * Bad :: let firstName = 'Ankit';
 */
const state = 'Gujarat';
console.log('state::', state);

/**
 * use separate statements for each variable
 * Bad: let firstName, lastName;
 */
const firstName = 'Ankit';
const lastName = 'Patel';
console.log('fullname ::', firstName + lastName);
/**
 * Descriptive name for variable
 * Bad :: let a, x;
 * Bad :: let fruit_names = [apple, pineapple, mango, grapes];
 */
const fruitNames = ['apple', 'pineapple', 'mango', 'grapes'];
console.log('fruits', fruitNames);

/**
 * Remove unused variable | ESLint :: no-unused-vars
 * let unusedVar;
 */

/**
 * Avoid assigning multiple vars on one line
 * Bad :: const foo = bar = 1;
 */
const foo = 1;
const bar = 1;
console.log('foo + bar', foo + bar);

/**
 * consistent quotes for string
 * Bad :: const country = "India";
 */
const country = 'India';
console.log('country:: ', country);

/**
 * Avoid constuctor to init array/object
 * Bad :: const days = new Array('monday', 'tuesday');
 * Bad :: const person = new Object();
 */
const days = ['monday', 'tuesday'];
const person = {};
console.log('Array + Object init::', days, person);

 /**
  * use quote in property only where needed
  * Bad ::
  * const employee = {
  *     'name': 'Ankit',
  *     'employee-code': 1001
  *  };
  */
const employee = {
    name: 'Ankit',
    'employee-code': 1001,
};
console.log('employee ::', employee);

/**
 * type casting: string
 * multiple method to convert data el to string : new String(), toString(), String()
 * Bad :: new String() returns object, error on undefined.toString()
 * String() works in all cases
 */
const strData = [101, 'Ankit', undefined];

strData.forEach((el) => {
    console.log(`${el} ::`);

    console.table({
        // 'new String()' : {
        //     result: `${new String(el)}`,
        //     type: `${typeof new String(el)}`
        // },
        // 'toString()' : {
        //     result: `${el.toString()}`,
        //     type: `${typeof el.toString()}`
        // },
        'String()' : {
            result: `${String(el)}`,
            type: `${typeof String(el)}`
        }
    });
});

/**
 * Type cast: Numbers
 * Two methods : new Number(), Number()
 * Bad :: new Number() returns object
 * Number() wrapper works in all case
 */
const numData = [12, true, undefined];

numData.forEach((el) => {
    console.log(`${el} ::`);

    console.table({
        // 'new Number()' : {
        //     result: `${new Number(el)}`,
        //     type: `${typeof new Number(el)}`
        // },
        'Number()' : {
            result: `${Number(el)}`,
            type: `${typeof Number(el)}`
        }
    });
});

/**
 * Type cast : boolean
 * Common practice: !!
 */
const boolData = ['flower', 0, undefined];

boolData.forEach((el) => {
    console.log(`${el} ::`);

    console.table({
        // 'new Boolean()' : {
        //     result: `${new Boolean(el)}`,
        //     type: `${typeof new Boolean(el)}`
        // },
        // 'Boolean()' : {
        //     result: `${Boolean(el)}`,
        //     type: `${typeof Boolean(el)}`
        // },
        '!!': {
            result: `${!!el}`,
            type: `${typeof !!el}`
        }
    });
});

/**
 * avoid unnecessary boolean type cast
 * Bad :: if(!!isLoggedIn) {
 */
const isLoggedIn = true;

if(isLoggedIn) {
    console.log('is logged in');
} else {
    console.log('isn\'t logged in');
}

/**
 * Use === for comparing values
 */
const compareData = [0, '', false, null];
compareData.forEach((el) => {
    console.log(`compare :: ${el}`);
    if (el === '0') {
        console.log(`${el} === 0`);
    }

    if (el === undefined) {
        console.log(`${el} === undefined`);
    }
});

/**
 * Don't use Yoda Condition
 * Bad :: if ('ahmedabad' === city) {
 * variable should come first in condition
 */
if (city === 'ahmedabad') {
    console.log('city is ahmedabad');
}

/**
 * Avoid unnecessary and nested ternary statements
 */
const warningData = {
    warning: true,
    warningText: 'Be aware of lion',
};
const noWarningText = 'No warning text available'; 
const { warning, warningText } = warningData;

console.log(`${warning ? warningText : noWarningText}`);

// Add parentheses in condition
// Bad :: if (city === 'ahmedabad' || city === 'Gandhinagar')
if ((city === 'Ahmeadabad') ||
    (city === 'Gandhinagar')) {
    console.log('You are in gujarat');
}

console.groupEnd();