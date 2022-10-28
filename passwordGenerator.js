const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// init values arrays
const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetUpperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const numbers = '0123456789'.split('');
const ponctuations = '!?;:,.$%'.split('');
const allCharacters = alphabetLowerCase.concat(alphabetUpperCase, numbers, ponctuations);


// init values
const passwordArray = [];

// init numers of characters required
const majusculesNumber = 2;
const numbersNumber = 2;
const ponctuationNumber = 1;
const remainNumber = generateRandom(8, 16) - majusculesNumber - numbersNumber - ponctuationNumber;

// fill values of majuscules, number, and ponctuation
for (let i = 0; i < majusculesNumber; i = i + 1) {
    passwordArray.push(
        alphabetUpperCase[generateRandom(0, alphabetUpperCase.length - 1)]
    );
}

for (let i = 0; i < numbersNumber; i = i + 1) {
    passwordArray.push(
        numbers[generateRandom(0, numbers.length - 1)]
    );
}

for (let i = 0; i < ponctuationNumber; i = i + 1) {
    passwordArray.push(
        ponctuations[generateRandom(0, ponctuations.length - 1)]
    );
}

// fill remaining characters with lower case
for (let i = 0; i < remainNumber; i = i + 1) {
    passwordArray.push(
        allCharacters[generateRandom(0, allCharacters.length - 1)]
    );
}

// build password
const password = passwordArray.sort(() => 0.5 - Math.random()).join('');

console.log('remaining:', remainNumber);

console.log(password);