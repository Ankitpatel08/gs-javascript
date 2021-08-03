// Storage Types: Cookie, Local Stoarage, Session Storage
// Cookie: 4kb, HTML4/5, manually set expiry
// Local Storage: 10mb, HTML5, never expire
// Session Storage: 5mb, HTML5, expires on tab close
console.group('*** Storage ***');

// local storage
// setting item | key-value pair
localStorage.setItem('name', 'Ankit');
// retrieving item
let name = localStorage.getItem('name');
console.log('Local :: ',name);

// override value
// localStorage.setItem('name', 'Akshay');

console.log('Local :: ', localStorage.getItem('name'));
console.log('Local :: unkonwn item', localStorage.getItem('test'));

// localStorage.removeItem('name');
// console.log('Local :: ', localStorage.getItem('name'));


// Session Storage
// sessionStorage.setItem('username', 'jarvis');
sessionStorage.setItem('username', 'ankit');
console.log('Session ::', sessionStorage.getItem('username'));

// Cookie
document.cookie = 'firstName=ankit; expires='+ new Date(2021, 7, 5).toUTCString();
document.cookie = 'lastName=patel; expires='+ new Date(2021, 7, 5).toUTCString();

console.log(document.cookie);

console.groupEnd();
