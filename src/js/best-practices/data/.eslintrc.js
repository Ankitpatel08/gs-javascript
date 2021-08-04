'use strict';

module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2021,
    },
    rules: {
        strict: ['error', 'global'], // use strict
        'no-var': 'error', // avoid var to declare variable
        'prefer-const': 'error', // use const for variables never reassigned
        'one-var': ['error', 'never'], // use separate statement for each variable
        camelcase: 'error', // camel case for declaring variable
        'no-unused-vars': 'error', // to remove unused variables
        'no-multi-assign': 'error', // avoid multiple assignment in single line
        quotes: ['error', 'single'], // consistent quotes : single, backtick, double
        'no-array-constructor': 'error', // ensure array literals to init array
        'no-new-object': 'error', // ensure object literals to init object 
        'quote-props': ['error', 'as-needed'], // use quote in property only needed
        'no-new-wrappers': 'error', // avoid constuctor for type casting primitive data
        'no-extra-boolean-cast': 'error', // avoid unnecessary boolean type-cast
        eqeqeq: 'error', // ensure === in comparision
        yoda: 'error', // ensure variable first in condition
        'no-unneeded-ternary': 'error', // avoid unnecessary ternary
        'no-nested-ternary': 'error' // avoid nested ternary
    },
};