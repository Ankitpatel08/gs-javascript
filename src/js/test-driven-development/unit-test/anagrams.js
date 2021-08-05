export const isAnagram = (firstString, secondString) => {
    const firstSortedArray = firstString.replace(' ', '').split('').sort();
    const secondSortedArray = secondString.replace(' ', '').split('').sort();

    return firstSortedArray.join('') === secondSortedArray.join('');
}