console.group('*** Queue ***');

/**
 * Queue: FIFO : first in first out
 * Methods: enqueue(value), dequeue(), size(), contains(value)
 */
class queues {
    constructor() {
        // initial head/tail is 0
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value) {
        // adding iteam in queue, increased tail by 1
        this.storage[this.tail] = value;
        this.tail += 1;
    }

    dequeue() {
        // if tail=0, no iteams added in queue
        if (this.tail === 0) {
            return;
        }

        // remove element entered first
        let element = this.storage[this.head];
        delete this.storage[this.head];

        // head should never be greater than tail
        // Only increase head if it's less than tail
        // if head == tail, no item in queue
        if (this.head < this.tail) {
            this.head += 1;
        }

        return element;
    }

    size() {
        return this.tail - this.head;
    }

    contains(value) {
        let index = this.tail - 1;
        while (this.head <= index) {
            if (this.storage[index] === value) {
                return true;
            }
            index--;
        }

        return false;
    }
}

let myQueue = new queues();

myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');
myQueue.enqueue('e');
console.log('myQueue :: ', myQueue);


myQueue.dequeue();
console.log('myQueue after dequeue:: ', myQueue);

console.log('Queue Size ::', myQueue.size());

console.log('myqueue contains: a', myQueue.contains('a'));
console.log('myqueue contains: e', myQueue.contains('e'));
console.log('myqueue contains: g', myQueue.contains('g'));

console.groupEnd();