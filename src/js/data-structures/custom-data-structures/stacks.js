console.groupCollapsed('*** stacks ***');

/**
 * Stack: LIFO : Last in first out
 * Methods: Push, Pop, Peek, Length, printStack, reverse
 */

class Stack {
    constructor() {
        // initial top: 0; used as key to store item in stack
        this.storage = {};
        this.top = 0;
    }

    push(value) {
        // simply add item at end of current stack
        this.storage[this.top] = value;
        this.top += 1;
    }

    length() {
        // As we start with 0, current top will be length of stack
        return this.top;
    }

    peek() {
        // returns item at top, without removing it
        return this.top > 0 && this.storage[this.top - 1];
    }

    pop() {
        // if top is 0, no item added in stack
        if (this.top === 0) {
            return new Error('Stack is empty');
        }
        
        // remove last item, decrease top by 1
        let lastItem = this.storage[this.top - 1];
        delete this.storage[this.top - 1];
        this.top -= 1;

        return lastItem;
    }

    printStack() {
        let index = this.top - 1;

        while(index >= 0) {
            console.log(this.storage[index]);
            index--;
        }
    }

    reverse() {
        console.log('*** Reverse Stack ***');
        this._reverse(this.top - 1);
    }

    _reverse(index) {
        if (index < 0) {
            return;
        } else {
            this._reverse(index - 1);
        }

        console.log(this.storage[index]);
    }
}

let myStack = new Stack();

//push items in stack
myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.push('d');
myStack.push('e');

console.log(myStack);

//length
console.log('Length ::', myStack.length());

//peek
console.log('Item at Peek:: ', myStack.peek());

//pop
myStack.pop();
myStack.pop();
console.log('after Pop item ::', myStack);

//print stack
myStack.printStack();

//reverse stack
myStack.reverse();

console.groupEnd();