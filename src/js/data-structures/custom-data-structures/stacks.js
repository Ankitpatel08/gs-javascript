/**
 * 
 * Stack: Push, Pop, Peek, Length
 */

class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(value) {
        this.data[this.top] = value;
        this.top += 1;
    }

    length() {
        return this.top;
    }

    peek() {
        return this.data[this.top - 1];
    }

    pop() {
        if (this.top === 0) {
            return new Error('Stack is empty');
        }

        this.top = this.top - 1;
        this.data.pop();
    }

    printStack() {
        let index = this.top - 1;

        while(index >= 0) {
            console.log(this.data[index]);
            index--;
        }
    }

    reverse() {
        this._reverse(this.top - 1);
    }

    _reverse(index) {
        if (index != 0) {
            this._reverse(index - 1);
        }

        console.log(this.data[index]);
    }
}

let myStack = new Stack();

//push items in stack
myStack.push(1);
myStack.push(3);
myStack.push('ankit');
myStack.push('pinal');

console.log(myStack);

//length
console.log('Length ::', myStack.length());

//peek
console.log('Item at Peek:: ', myStack.peek());

//pop
myStack.pop();
console.log('after Pop item ::', myStack);

//print stack
myStack.printStack();

//reverse stack
console.log(myStack.reverse());