const operation = readline();
const pseudoRandomNumber = parseInt(readline());
const alphabet = [];
for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(65 + i));
}
const rotors = [];
for (let i = 0; i < 3; i++) {
    const rotor = readline();
    rotors.push(rotor);
}
const rotorOne = rotors[0].split('');
const rotorTwo = rotors[1].split('');
const rotorThree = rotors[2].split('');

const message = readline();

// encode rotor function
const encodeRotor = (rotor, letters) => {
    const newLetters = [];
    letters.forEach((e) => {
        //console.error(`letter: ${e}, index: ${alphabet.indexOf(e)} --> ${rotor[alphabet.indexOf(e)]}`);
        newLetters.push(rotor[alphabet.indexOf(e)]);
    });
    
    return newLetters;
};

// decode rotor function
const decodeRotor = (rotor, letters) => {
    //! to verify
    const newLetters = [];
    letters.forEach((e) => {
        //console.error(`letter: ${e}, index: ${rotor.indexOf(e)} --> ${alphabet[rotor.indexOf(e)]}`);
        newLetters.push(alphabet[rotor.indexOf(e)]);
    });
    
    return newLetters;
};

// encode function
const encodeMsg = (msg, num) => {
    const messageLetters = msg.split('');
    // transform letters
    //! modify this part to handle loop on alphabet
    const codedLetter = [];
    let counter = 0;
    for (const letter of messageLetters) {
        //console.error(`letter: ${letter}, code: ${letter.charCodeAt(0)} + ${num} + ${counter}`);
        const letterToFind = String.fromCharCode(letter.charCodeAt(0) + num + counter);
        //console.error('letterToFind', letterToFind);
        codedLetter.push(letterToFind);
        counter ++;
    }
    console.error(codedLetter);
    // rotors
    const rotoredFirst = encodeRotor(rotorOne, codedLetter);
    const rotoredSecond = encodeRotor(rotorTwo, rotoredFirst);
    const rotoredThird = encodeRotor(rotorThree, rotoredSecond);
    console.error(rotoredThird);

    // return result
    return rotoredThird.join('');
}

// decode function
const decodeMsg = (msg, num) => {
    const messageLetters = msg.split('');
    // rotors
    const deRotoredThird = decodeRotor(rotorThree, messageLetters);
    const deRotoredSecond = decodeRotor(rotorTwo, deRotoredThird);
    const deRotoredFirst = decodeRotor(rotorOne, deRotoredSecond);
    console.error('derotored msg:', deRotoredFirst);
    // transform letters
    const decodedLetter = [];
    let counter = 0;
    for (const letter of deRotoredFirst) {
        //! modify this part to handle loop on alphabet
        //console.error(`letter: ${letter}, code: ${letter.charCodeAt(0)} - ${num} - ${counter}`);
        const letterToFind = String.fromCharCode(letter.charCodeAt(0) - num - counter);
        //console.error('letterToFind', letterToFind);
        decodedLetter.push(letterToFind);
        counter ++;
    }
    // return result
    return decodedLetter.join('');
};

// process income
if (operation === 'ENCODE') {
    console.log(encodeMsg(message, pseudoRandomNumber));
} else if (operation === 'DECODE') {
    console.log(decodeMsg(message, pseudoRandomNumber));
}
