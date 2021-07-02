/**
 * Linked list : element knows about the next element
 * a(next)-> b(next) -> c(next)
 * allows for efficient re-sizing and insertion at start and at end of the list
 * Advantage over array: Easy to prepend element
 */

class LinkedList {
    constructor() {
        // initially no element in list ; head/tail = null
        this.head = null; //First Element
        this.tail = null; // Last Element
    }

    append(value) {
        // new node will be added at last position, next for new node will be null
        const newNode = {
            value: value,
            next: null
        };

        // update next for existing tail to newNode
        if (this.tail) {
            this.tail.next = newNode;
        }
        // newly added node becomes new tail
        this.tail = newNode;

        // if head is null, this is first element
        // head = tail = only element
        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        // current head become next for prepended element
        const newNode = {
            value: value,
            next: this.head
        }

        // new node will be new head
        this.head = newNode;

        // if no tail, this is first element
        // head = tail = only element
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        // If it's first element to be removed, 2nd element will become head
        while(this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        // iterate through all element and find the node starting from 2nd node ; currentnode.next
        let currentNode = this.head;
        while(currentNode.next) {
            if (currentNode.next.value === value) {
                // to remove element, updating reference for current.next to immediate next element after that node
                // without reference in next, element will be unreachable
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        // If last element to be removed, tail gets updated to currentNode
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    find(value) {
        // head is null, nothing in list
        if (!this.head) {
            return null;
        }
        
        // iterate through list and find node matches value
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
        // find node after new node to insert
        const existingNode = this.find(afterValue);

        if (existingNode) {
            // current next of existing node, will be next for new node
            const newNode = {
                value: value,
                next: existingNode.next
            }

            // newNode will be next for existingNode
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

console.groupCollapsed('*** Linked List ***');
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
