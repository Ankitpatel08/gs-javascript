console.groupCollapsed('*** Async ***');

const fetchData = (callback) => {
    setTimeout(() => {
        callback('Async:: test');
    }, 1000);
};

// callback function regiesterd, to be executed after timer is done.
// here this will get executed after all sync code
setTimeout(() => {
    console.log('Async :: Third Statement');
    fetchData((message) => {
        console.log(message);
    });
}, 1);

console.log('sync :: first statement');
console.log('sync :: second statement');


// promises
const retrieveData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async :: Promise :: test');
        }, 1000);
    });
};

setTimeout(() => {
    console.log('Async:: Promise');
    retrieveData().then(data => {
        console.log(data);
    });
}, 2000);

console.groupEnd();