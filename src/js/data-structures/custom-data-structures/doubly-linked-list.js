console.groupCollapsed('*** Doubly Linked List ***');
/**
 * 
 */
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        // If tail exist, previous for new node will be current tail
        const newNode = {
            value: value,
            next: null,
            previous: this.tail ? this.tail : null
        }

        // If head is null, this will be first element
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return;
        }

        // next for current tail will be new node and new node will be tail
        this.tail.next = newNode;
        this.tail = newNode;
    }

    prepend(value) {
        // If head exist, next for new node will be current head
        const newNode = {
            value: value,
            next: this.head ? this.head : null,
            previous: null
        }

        // If head is there, previous for head will be new node
        if (this.head) {
            this.head.previous = newNode;
        }

        // new node will be head
        this.head = newNode;

        // If no tail exist, new node will be tail
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        // Iterate througl all elements, starting from head
        while (currentNode) {
            if (currentNode.value === value) {
                deletedNode = currentNode;

                // If deleted Node is first element
                if (deletedNode === this.head) {
                    // new head will be 2nd element, If there is
                    this.head = deletedNode.next;

                    // new head's previous will be null
                    if (this.head) {
                        this.head.previous = null;
                    }
                    
                    // if all elements are deleted, updating tail to null
                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    // previous of tail will be new tail; next of new tail will be null
                    this.tail = deletedNode.previous;
                    this.tail.next = null;
                } else {
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    // new next of previousNode will be next of deletedNode
                    previousNode.next = nextNode;
                    // new previous of nextNode will be previous of deletedNode
                    nextNode.previous = previousNode;
                }
            }

            currentNode = currentNode.next;
        }
    }

    find(value) {
        // If no head: Empty List
        if(!this.head) {
            return null;
        }

        let currentNode = this.head;

        // iterate through list and return node, if value matches
        while(currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    deleteTail() {
        // return if no tail exist
        if (!this.tail) {
            return;
        }

        // stored deletedTail in local var
        let deletedTail = this.tail;

        // if head = tail, deleting only element from list
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            
            return deletedTail;
        }

        // new tail will be previous of deleted tail; and next of new tail will be null
        this.tail = deletedTail.previous;
        this.tail.next = null;
    }

    deleteHead() {
        // return if no head
        if (!this.head) {
            return null;
        }

        // stored current head in local var
        let deletedHead = this.head;

        if (this.head.next) {
            // If head has next, next will be new head and previous of new head will be null
            this.head = deletedHead.next;
            this.head.previous = null;
        } else {
            // if head's next is null, It's tail :D
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
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

let myDoublyLinkedList = new DoublyLinkedList();

myDoublyLinkedList.append('d');
myDoublyLinkedList.append('e');
myDoublyLinkedList.append('f');

myDoublyLinkedList.prepend('c');
myDoublyLinkedList.prepend('b');
myDoublyLinkedList.prepend('a');

console.log('printList :: append/prepend ::', myDoublyLinkedList.convertToArray());

myDoublyLinkedList.delete('a');
myDoublyLinkedList.delete('c');
myDoublyLinkedList.delete('f');

console.log('printList :: delete::', myDoublyLinkedList.convertToArray());

console.log('Find a :: ', myDoublyLinkedList.find('a'));
console.log('Find b :: ', myDoublyLinkedList.find('b'));

// myDoublyLinkedList.deleteTail();
// myDoublyLinkedList.deleteTail();
myDoublyLinkedList.deleteTail();
console.log('printList :: deleteTail ::', myDoublyLinkedList.convertToArray());

myDoublyLinkedList.deleteHead();
// myDoublyLinkedList.deleteHead();
// myDoublyLinkedList.deleteHead();
console.log('printList :: deleteHead ::', myDoublyLinkedList.convertToArray());

console.groupEnd();