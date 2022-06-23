const word = 'hi';
let sentence = 'Hi there!'

let sentenceArray = sentence.split('');
console.log(sentenceArray);

let sentenceFiltered = sentenceArray.filter((x) => !['(', ')', ':', ',', '!'].includes(x));
console.log(sentenceFiltered);

let sentenceReJoined = sentenceFiltered.join('');
console.log(sentenceReJoined);

const words = sentence.split(' ').map((x) => x.toLowerCase());
console.log(words.includes(word.toLowerCase()) ? 'exists' : 'absent');
