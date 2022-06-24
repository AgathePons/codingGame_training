const inputs = [2, 2, 1, 2, 1, 4, 4, 5, 9, 8, 5, 2, 8, 6, 2];
const array = [];

for (let i = 0; i < inputs.length; i++) {
    const num =inputs[i];
    array.push(num);
}

let count = {};

for (const number of array) {
    if (count[number]) {
        count[number] += 1;
    } else {
        count[number] = 1;
    }
}
console.error(count);

let odd = [];

for (const key in count) {
    if (count[key] % 2 === 1) {
        console.error(`The num ${key} appears ${count[key]} so it is odd`);
    }
}
