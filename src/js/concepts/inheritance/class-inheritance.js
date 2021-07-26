// Class Syntax for inheritance
console.groupCollapsed('*** Inheritance: Class Syntax ***');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log(`Good Morning! ${this.name}`);
    }
}

// Employee extends class Person
class Employee extends Person {
    constructor(name, age, empId) {
        // Calling Person Constructor using super()
        super(name, age);
        this.empId = empId;
    }
}

let emp1 = new Employee('Ankit', 26, 101);

// will be able to access Person's method using instance of Employee
emp1.greetings();

console.groupEnd();
