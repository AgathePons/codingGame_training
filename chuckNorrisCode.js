// On reçoit une string et on doit l'encoder ainsi :
// 1 convertir chaque caractère en binaire (7bits) pour obtenir une string unique de 0 et 1
// 2 convertir en unary (en 0)

const MESSAGE = readline();
let binaryString = '';
console.error(MESSAGE);

// split in array
msgArray = MESSAGE.split('');

// convert in binary
for (let i = 0; i < MESSAGE.length; i++) {
    const asciiCode = MESSAGE.charCodeAt(i);
    let binaryCode = asciiCode.toString(2);
    console.error(`ascii ${asciiCode}, binary ${binaryCode}`);
    if (binaryCode.length < 7) {
        binaryCode = '0' + binaryCode;
        console.error(`convert 7bits: ${binaryCode}`);
    }
    binaryString += binaryCode;
}

console.error(`binary string ${binaryString}`);

const arrayBloc = binaryString.match(/(.)\1*/g)
console.error(arrayBloc);
// encode
let encoded = '';
for (bloc of arrayBloc) {
    console.error('bloc', bloc);
    console.error(bloc[0]);
    if (bloc[0] === '1') {
        encoded += '0 ';
    } else {
        encoded += '00 '
    }
    for (char of bloc) {
        encoded += '0';
    }
    encoded += ' ';
}

console.log(encoded.slice(0, -1));