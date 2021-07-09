/**
 * Functional : Bunch of pure functions | takes input and returns output
 * logical blocks of statements
 * Based on Single responsibility principal
 * Highly reusable
 */

const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const validate = (value, validationType, validatorValue) => {
    if (validationType === REQUIRED) {
        return value.trim().length > 0;
    }
    
    if (validationType === MIN_LENGTH) {
        return value.trim().length > validatorValue;
    }
}

const getUserInput = (inputElementId) => document.getElementById(inputElementId).value;

const createUser = (username, password) => {
    if (!validate(username, REQUIRED) || !validate(password, MIN_LENGTH, 5)) {
        throw new Error('Functional :: Invalid Input');
    }

    return {
        username,
        password
    }
}

const greetUser = ({username}) => {
    console.log(`Hello ${username}`);
}

const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredUserName = getUserInput('username');
    const enteredPassword = getUserInput('password');

    try {
        const newUser = createUser(enteredUserName, enteredPassword);
        greetUser(newUser);
    } catch (error) {
        alert(error.message);
    }
}

const connectForm = (formId, formSubmitHandler) => {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', submitFormHandler);