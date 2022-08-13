
// ----------- Complexe Reduce ----------- //
// transform the 02_array_reduce.txt file into a complexe object with reduce
const fs = require('fs');

const output = fs.readFileSync('./docs/02_array_reduce.txt', 'utf-8') // read the file in utf-8
  .trim() // remove blanks before and after string
  .split('\n') // split on new line
  .map(line => line.split('\t')) // split on tab
  .reduce((persons, line) => {
    //console.log('line:', line);

    // create a key with person name (line[0]) where value is an empty array,
    // or if this key already exists, it is equal to itself
    persons[line[0]] = persons[line[0]] || [];
    // in this array, push an object with name, price and quantity (index 1, 2, 3 of line array)
    persons[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3],
    })

    return persons;
  }, {}); // persons is an empty object at the begining

console.log('output', JSON.stringify(output, null, 2));

// ----------- Map ----------- //
// create a new array with the results of the callbacl function
// from an array of words, get an array with the numbers of letters of each words
// we can access the index in the second arg, and the original array in third arg
// we must return the value we want in the new array
const myArray = ['apple', 'cherry', 'strawberry', 'pear'];

const result = myArray.map((word, index, array, thisValue = 0) => {
  console.log(`element n°${index} of the array ${array}`);
  console.log('this:', thisValue);
  return word.length;
});

// ----------- find / findIndex ----------- //
// return the value of the first item found which comply with the condition given by the function passed in arg
// else return undefined
const myArrayOfNumbers = [-5, 6, 12, 0, 35, 56];
const lessThanTen = myArrayOfNumbers.find(item => item < 10); // -> -5
const indexOfZero = myArrayOfNumbers.findIndex(0); // -> 3

// ----------- Filter ----------- //
// create a new array containing all items of the original arraywhich comply with the callback function
// like map, it can take index, the original array, and this in arg
const moreThanTen = myArrayOfNumbers.filter(item => item > 10);
const moreThanTenAndEven = myArrayOfNumbers.filter((item, index, array, thisValue = 'I am this') => {
  console.log(`element n°${index} of the array ${array}`);
  console.log('this:', thisValue);
  if (item > 10 && item % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
