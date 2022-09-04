// WIP

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

const extensions = [];
const types = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    console.error('inputs :', inputs);
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.
    extensions.push(EXT.toLowerCase());
    types.push(MT);
}

console.error('extensions', extensions);
console.error('types', types);

const regex = /\.\w{3,4}.?.*/g; // --> /\.\w{2,10}+$/gm

for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    console.error('file : ', FNAME);
    // if valid filename
    if (FNAME.match(regex)) {
        const matched = FNAME.match(regex);
        const sliced = matched[0].slice(1);
        console.error('matched :', matched[0]);
        console.error('sliced :', sliced);
        const indexRes = extensions.indexOf(sliced.toLowerCase());
        // if match with type we have, else unknown
        console.log(indexRes === -1 ? 'UNKNOWN' : types[indexRes]);
    } else {
        console.log('UNKNOWN');
    }
}