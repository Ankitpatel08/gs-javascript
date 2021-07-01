/**
 * Linked list : element knows about the next element
 * a(next)-> b(next) -> c(next)
 * allows for efficient re-sizing and insertion at start and at end of the list
 * Advantage over array: Easy to prepend element
 */

class LinkedList {
    constructor() {
        this.head = null; //First Element
        this.tail = null; // Last Element
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        while(this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;
        while(currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = {
                value: value,
                next: existingNode.next
            }

            existingNode.next = newNode;
        }
    }

    convertToArray() {
        const elements = [];
        let currentNode = this.head;

        while(currentNode) {
            elements.push(currentNode);
            currentNode = currentNode.next;
        }

        return elements;
    }
}

console.group('*** Linked List ***');
const firstLinkedList = new LinkedList();

firstLinkedList.append('ankit');
firstLinkedList.append(1);
firstLinkedList.append(2);
firstLinkedList.append('ankit');
firstLinkedList.append('ankit');
firstLinkedList.append('test');

firstLinkedList.prepend('def');
firstLinkedList.prepend('abc');
firstLinkedList.prepend('abc');

console.log(firstLinkedList.convertToArray());

firstLinkedList.delete('abc');
firstLinkedList.delete('ankit');
firstLinkedList.delete('test');
console.log(firstLinkedList.convertToArray());

firstLinkedList.insertAfter('a', 1);

console.log(firstLinkedList.find('ankit'));
console.log(firstLinkedList.convertToArray());
console.groupEnd();
