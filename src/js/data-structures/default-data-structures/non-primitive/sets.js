

console.groupCollapsed('*** Sets ***');
/**
 * Sets: Insertion order not stored, method to access element, iterable, dynamic size, unique values, deletion/finding faster
 * instance.add(value); | instance.has(value) : boolean | instance.delete(value)
 */
let myFoodItems = new Set();
myFoodItems.add('coffee');
myFoodItems.add('beer');
myFoodItems.add('pizza');

// not allowed, only one instance stays
myFoodItems.add('coffee'); 

// iterable
for (const el of myFoodItems) {
    console.log(el);
}

// item check
console.log(myFoodItems.has('beer'));
//delete item
myFoodItems.delete('beer');
console.log(myFoodItems);

let nums = [1,2,3,4,1,2,3,4,4,3,2,1];
let numsSet = new Set(nums);

console.log(`nums length:: ${nums.length} || set size:: ${numsSet.size}`);

console.groupEnd();