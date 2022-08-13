const string = 'This is a simple string 123';

// find with index
const characterAtIndex = string.charAt(0) // index 0 of the string

// split / join into array
const splitedArray = string.split('');
const joinedArray = splitedArray.join('');

// slice / concat
const firstPart = string.slice(0, 16);
const secondPart = string.slice(-10, -1);

const combined = firstPart.concat('add something', secondPart);

// check regex
const isMatching = string.match(/[a-z]/g); // true / false

// UTF-16 / unicode code
const characterCodeUTF = string.charCodeAt(0); // index 0 of the string
const characterCodeUnicode = string.codePointAt(0); // index 0 of the string
const characterFromCode = String.fromCharCode(65); // --> A

// uppercase / lowercase
const lowerCaseString = string.toLowerCase();
const upperCaseString = string.toUpperCase();

// convert number / string
const convertedNumber = Number(string);
const convertedtoString = convertedNumber.toString();

// replace
const firstIByA = string.replace('i', 'a');
const allIByA = string.replaceAll('i', 'a');

// search in string
const isSimpleIncluded = string.includes('simple'); // true / false

// remove blank before and after a string
const myString = '   something    ';
const cleanString = myString.trim();