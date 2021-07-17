console.groupCollapsed('*** Challenges | String prepend ***');
// add prepend function in string globally
String.prototype.prepend = function(value) {
    return value + this;
};

// let greetings = prompt('enter greetings: ');
console.log(' ankit'.prepend('Hello'));
console.groupEnd();