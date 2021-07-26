console.groupCollapsed('*** Prototypal Inheritance ***');
// Javascript is prototype based language
//  All the Objects in javascript like Array, Boolean, Date etc, inherits properties and methods from their prototype

//  constructor function | Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greetings = function() {
    console.log(`Hello ${this.name}, Good Morning`);
}

console.log('Person::', Person.prototype);

// constructor function | Employee
function Employee(name, age, empId) {
    // call() allows for function/method belonging to one object
    // to be assigned and called for different object, in current context.
    // using call method to call person's constructor
    Person.call(this, name, age);

    this.empId = empId;
}

// after calling constructor of Person, will be able to access properties of Person from Employee instance
console.log('Employee Name :: ', new Employee('Ankit', 26, 101).name);

// Employee prototype won't have greetings method
console.log('Employee ::', Employee.prototype);

// assigning Person object(which has all method of person) to employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Object.defineProperty(Employee.prototype, 'constructor', {
//     value: Employee,
//     enumerable: false,
//     writable: true
// });

console.log('Employee: After setting prototype :: ', Employee.prototype);
console.log('Employee Constructor: After setting prototype :: ', Employee.prototype.constructor);

let emp2 = new Employee('Akshay', 29, 102);
emp2.greetings();

console.groupEnd();