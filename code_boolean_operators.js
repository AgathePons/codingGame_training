// logic-gates

const n = parseInt(readline());
const m = parseInt(readline());

// stock inputs in an array of obj
inputsArray = [];
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const inputName = inputs[0];
    const inputSignal = inputs[1];
    inputsArray.push({
        name: inputName,
        signal: inputSignal,
    });
}
/* console.error('------inputsArray-----------');
console.error(inputsArray); */

// convert signal to bool
for (element of inputsArray) {
    element.bool = [];
    element.signal = element.signal.split('').map(e => {
        if (e === '_') {
            element.bool.push(false);
        } else if (e === '-') {
            element.bool.push(true);
        }
    });
    delete element.signal;
}

/* console.error('------NEW inputsArray-----------');
console.error(inputsArray); */

// stock instructions in an array of obj
const instructions = [];
for (let i = 0; i < m; i++) {
    var inputs = readline().split(' ');
    const outputName = inputs[0];
    const type = inputs[1];
    const inputName1 = inputs[2];
    const inputName2 = inputs[3];
    instructions.push({
        outputName,
        type,
        inputName1,
        inputName2,
    });
}
console.error('------instructions-----------');
console.error(instructions);

// AND function
const compareAND = (input1, input2) => {
    let result = '';
    input1.forEach((e, i) => {
        if (e && input2[i]) {
            result += '-';
        } else {
            result += '_';
        }
    });
    return result;
};
// NAND function
const compareNAND = (input1, input2) => {
    let result = '';
    input1.forEach((e, i) => {
        if (!(e && input2[i])) {
            result += '-';
        } else {
            result += '_';
        }
    });
    return result;
};
// OR function
const compareOR = (input1, input2) => {
    let result = '';
    input1.forEach((e, i) => {
        if (e || input2[i]) {
            result += '-';
        } else {
            result += '_';
        }
    });
    return result;
};

// NOR function
const compareNOR = (input1, input2) => {
    let result = '';
    input1.forEach((e, i) => {
        if (!(e || input2[i])) {
            result += '-';
        } else {
            result += '_';
        }
    });
    return result;
};

// XOR function
const compareXOR = (input1, input2) => {
    let result = '';
    input1.forEach((e, i) => {
        if (e ^ input2[i]) {
            result += '-';
        } else {
            result += '_';
        }
    });
    return result;
};

// NXOR function
const compareNXOR = (input1, input2) => {
    let result = '';
    input1.forEach((e, i) => {
        if (!(e ^ input2[i])) {
            result += '-';
        } else {
            result += '_';
        }
    });
    return result;
};

// process all instructions
for (instruction of instructions) {
    let result = '';
    let code = '';
    result += instruction.outputName;
    result += ' ';

    //console.error(`type: ${instruction.type}, input1: ${instruction.inputName1}, input2: ${instruction.inputName2}`)
    bool1 = inputsArray.filter(obj => { return obj.name === instruction.inputName1 })[0].bool;
    bool2 = inputsArray.filter(obj => { return obj.name === instruction.inputName2 })[0].bool;

    if (instruction.type === 'AND') {
        code = compareAND(bool1, bool2);
    }
    if (instruction.type === 'NAND') {
        code = compareNAND(bool1, bool2);
    }
    if (instruction.type === 'OR') {
        code = compareOR(bool1, bool2);
    }
    if (instruction.type === 'NOR') {
        code = compareNOR(bool1, bool2);
    }
    if (instruction.type === 'XOR') {
        code = compareXOR(bool1, bool2);
    }
    if (instruction.type === 'NXOR') {
        code = compareNXOR(bool1, bool2);
    }
    result += code;
    
    console.log(result);
}

