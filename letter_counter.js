// on reçoit une string, on doit compter les lettres (or charactère spécial)

const message = readline();
const msgArray = message.split('');
let counter = 0;
for (char of msgArray) {
    if (/^[a-zA-Z]/.test(char)) {
        counter++;
    }
    console.error(`char: ${char} // counter: ${counter}`);
}
console.log(counter);