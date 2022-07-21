// on reçoit en entrée des valeurs.
// On doit comparer ses valeurs pour trouver le plus petit écart possible
const N = parseInt(readline());

const horses = [];
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    horses.push(pi)
}
console.error(horses);

// first way, dumb way : process all possible pairs
/* const pairs = horses.flatMap(
    (value, index) => horses.slice(index + 1).map( element => Math.abs(value - element) )
);
console.error(pairs);

const result = Math.min(...pairs)
console.log(result); */

// second way, smarter way : sort by value to avoid calc all combinations
sortedHorses = horses.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});
console.error(sortedHorses);

const results = [];
sortedHorses.forEach((value, index) => {
    results.push(Math.abs(value - sortedHorses[index + 1]));
});
results.pop();

console.log(Math.min(...results));