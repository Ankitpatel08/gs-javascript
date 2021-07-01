console.groupCollapsed('*** Maps ***');
/**
 * Maps: Ordered key:value pairs; access values by key; keys are unique, iterable, keys can be anything e.g. arrays[]
 * pure data storage, optimized for data access
 * instance.set(key, value) | instance.get(key)
 */
const resultData = new Map();

resultData.set('average', 4.9);
resultData.set('lastResult', null);

const subjects = {
    maths: 5.0,
    physics: 4.8
};

// Object as key
resultData.set(subjects, 5);

for (const el of resultData) {
    // key:value pair retuns as array
    console.table(el);
}

console.log(resultData);

// Getting value using key
console.log('-----> resultsData.get', resultData.get('average'));

//delete key:value pair
resultData.delete(subjects);
console.log(resultData);

console.groupEnd();