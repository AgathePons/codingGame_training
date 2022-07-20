const results = [];
const N = parseInt(readline());
const data = [];
let numberOfLoop = 1;

for (let i = 0; i < N; i++) {
  data[i] = readline().split(' ');
}

while (numberOfLoop != 0) {
  for (let i = 0; i < N; i++) {
    const operation = data[i][0];
    let arg1 = data[i][1];
    let arg2 = data[i][2];

    console.error(`operation: ${operation}, arg1: ${arg1}, arg2: ${arg2}`);

    if (arg1.startsWith('$')) {
      const index = arg1.slice(1);
      console.error(`arg1: ${arg1}, index: ${index}`);
      if (results.hasOwnProperty(index)) {
        arg1 = results[index];
        console.error(`arg1: ${arg1}`);
      } else {
        numberOfLoop++;
        continue;
      }
    }
    if (arg2.startsWith('$')) {
      const index = arg2.slice(1);
      console.error(`arg2: ${arg2}, index: ${index}, new value: ${results[index]}`);
      if (results.hasOwnProperty(index)) {
        arg2 = results[index];
        console.error(`arg1: ${arg1}`);
      } else {
        numberOfLoop++;
        continue;
      }
    }

    if (!results.hasOwnProperty(i)) {
      let result = 0;
      if (operation === 'VALUE') {
        result = Number(arg1);
      }
      if (operation === 'ADD') {
        result = Number(arg1) + Number(arg2);
      }
      if (operation === 'SUB') {
        result = Number(arg1) - Number(arg2);
      }
      if (operation === 'MULT') {
        result = Number(arg1) * Number(arg2);
      }
      if (result == 0) {
        result = Math.abs(result)
      }

      results[i] = result;
    }

  }
  numberOfLoop--;
}
for (let i = 0; i < N; i++) {
  console.log(results[i]);
}