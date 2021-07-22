console.groupCollapsed('*** String Manipulations ***');

// find number of vowels in string
const findVowelsNumber = (str) => {
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();

    for(let index=0; index < str.length ; index++){
        (vowels.indexOf(str[index]) > -1) && vowelsCount++;
    };

    return vowelsCount;
}

console.log('find Number of Vowels ::',findVowelsNumber('Ankit'));

// remove numbers from string
const removeNumbersFromString = (str) => {
    return str.replace(/[0-9]/g, '');
}

console.log('Remove numbers from string :: ',removeNumbersFromString('12Ankit235'));

// return char used most in string
const maxUsedChar = (str) => {
    let charCount = {};
    let maxCharCount = 0;
    let maxChar = '';

    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }

    for (let key in charCount) {
        if (charCount[key] > maxCharCount) {
            maxCharCount = charCount[key];
            maxChar = key;
        }
    }

    return `${maxChar} is used ${maxCharCount} times`;
}

console.log('Max used character::', maxUsedChar('abcbasbfbabsa'));
console.log('Max used character::', maxUsedChar('Ankit Patel'));

// Anagram strings | takes 2 strings, if anagram of each other, returns true
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let sortedStr1 = str1.split('').sort();
    let sortedStr2 = str2.split('').sort();

    return sortedStr1.join('') === sortedStr2.join('');
};

console.log('is Anagram Strings :: ', isAnagram('ankit', 'kitan'));
console.log('is Anagram Strings :: ', isAnagram('ankit', 'kiran'));

// Palindrom String : takes string, returns boolean
const isPalindrom = (str) => {
    let tempStr = str;
    let reverseStr = str.split('').reverse().join('');

    return (tempStr === reverseStr);
}

console.log('isPalindrom :: ababa ', isPalindrom('ababa'));
console.log('isPalindrom :: Ankit ', isPalindrom('Ankit'));

// Armstrong number : 153 == 1^3 + 5^3 + 3 ^3
const isArmstrong = (num) => {
    let numString = num.toString();
    let strLen = numString.length;
    let sum = 0;

    for (let i = 0; i < strLen ; i++) {
        sum += Math.pow(numString[i], strLen);
    }

    return num === sum;
}

console.log('is Armstrong :: 153', isArmstrong(153));
console.log('is Armstrong :: 585', isArmstrong(585));

//  make a first letter uppercase
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log('Capitalize:: ', capitalize('test test'));

console.groupEnd();