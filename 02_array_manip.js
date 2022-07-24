
// ----------- Complexe Reduce ----------- //
// transform the 02_array_reduce.txt file into a complexe object with reduce
const fs = require('fs');

const output = fs.readFileSync('./docs/02_array_reduce.txt', 'utf-8') // read the file in utf-8
  .trim() // remove blanks before and after string
  .split('\n') // split on new line
  .map(line => line.split('\t')) // split on tab
  .reduce((persons, line) => {
    //console.log('line:', line);

    // create a key with person name (line[0]) with value is an empty array,
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