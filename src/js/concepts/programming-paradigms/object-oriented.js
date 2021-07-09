/**
 * Object Oriented : code divided in logical group | create different objects
 * self explainatory | reusability till some extent
 * Easy to read and maintain
 */

class Validator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';

    static validate(value, validationType, validatorValue) {
        if (validationType === this.REQUIRED) {
            return value.trim().length > 0;
        }

        if (validationType === this.MIN_LENGTH) {
            return value.trim().length > validatorValue;
        }
    }
}

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    greet() {
        console.log(`Hello ${this.username}`);
    }
}

class UserInputForm {
    constructor() {
        this.userInputForm = document.getElementById('user-input');
        this.userNameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');

        this.userInputForm.addEventListener('submit', this.submitFormHandler.bind(this));
    }

    submitFormHandler(event) {
        event.preventDefault();

        const enteredUserName = this.userNameInput.value;
        const enteredPassword = this.passwordInput.value;

        if (!Validator.validate(enteredUserName, Validator.REQUIRED) || !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)) {
            alert('Invalid Input');
            return;
        }

        let newUser = new User(enteredUserName, enteredPassword);
        newUser.greet();
    }
}

new UserInputForm();