console.groupCollapsed('*** Array ***');
/**
 * Insertion order kept, element access via index, iterable, dynamic size, duplicate values are allowed, mix types
 * Array.push(el) | Array[index] | Array.splice(startIndex, numberOfItems)
 */
const arr = [1, 2, 4, 5, 'a', 'b', 5, 'd', 1, 2];
const names = ['ankit', 'patel', 'javascript', 'ankit'];

console.table({
    index1: names[1]
});

console.log('initial length', names.length);
for(let name of names) {
    console.log(name);
}   

names.push('pinal');
console.log('after element push length', names.length);

const pinalIndex = names.findIndex(el => el === 'pinal');
console.log('findIndex: Pinal', pinalIndex);

names.splice(3, 1);
console.log(names);

console.groupEnd();