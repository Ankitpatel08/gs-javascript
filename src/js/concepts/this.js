import {createCardMarkup, injectMakup} from '../util/dom-helpers';
console.group('*** This ***');

let thisMarkup = createCardMarkup({
    title: 'Concept: This',
    description: ['A property of an execution context'],
    markup: `<button class="button is-primary add-name">Add Name</button>
            <ul id="names"></ul>`
});

injectMakup('.concepts', thisMarkup);

class Name {
    constructor(name) {
        const nameItem = document.createElement('li');
        nameItem.textContent = name;
        const namesList = document.querySelector('#names');
        namesList.appendChild(nameItem);
    }
}

class NameGenerator {
    constructor() {
        const addNameCta = document.querySelector('.add-name');

        this.names = ['Akshay', 'Ankit'];
        this.currentName = 0;

        console.log('scope this in constructor ::', this);

        //addName is undefined
        // addNameCta.addEventListener('click', addName()); 

        // this refers to class scope
        // immediately invoked on load, nothing happens on click
        // addNameCta.addEventListener('click', this.addName());

        // pass reference of function, called when clicked, this: button
        // addNameCta.addEventListener('click', this.addName);

        // passing reference of this of class to function
        // addNameCta.addEventListener('click', this.addName.bind(this));

        // using arrow function
        addNameCta.addEventListener('click', () => {
            // this refers to the outer scope, which is class
            this.addName();
        });
    }

    addName() {
        console.log('this scope ::', this);
        const nameInstance = new Name(this.names[this.currentName]);
        this.currentName++;

        if (this.currentName >= this.names.length) {
            this.currentName = 0;
        }
    }
}

const nG = new NameGenerator();
console.log('ng names ::', nG.names);

console.groupEnd();