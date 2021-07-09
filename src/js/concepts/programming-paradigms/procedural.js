/**
 * Procedural : execute from TOP to Bottom with task we want to do
 * everything can be in single function
 * tightly coupled : no reusable code
 * Ideal for small scripts : code can get messy for large application
 * Redundant code for same task in multiple files
 */

const userForm = document.getElementById('user-input');

function submitFormHandler(event) {
    event.preventDefault();
    
    const userNameInput = document.getElementById('username');
    const enteredUserName = userNameInput.value;
    
    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;

    if (enteredUserName.trim().length === 0) {
        alert('Empty username');
        return;
    }

    if (enteredPassword.trim().length <= 5) {
        alert('Password should be 6 characters or longer');
        return;
    }

    const user = {
        userName: enteredUserName,
        password: enteredPassword
    }

    console.log(user);
}

userForm.addEventListener('submit', submitFormHandler);