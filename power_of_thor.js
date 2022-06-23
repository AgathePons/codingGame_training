// une position X / Y de départ, une position X / Y à atteindre, on se déplace sur 8 directions (N, NE, E, SE, S, SW, W, NW)

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
console.error(`position depart: x ${initialTx} y ${initialTy}`);
console.error(`position to reach: x ${lightX} y ${lightY}`);
let actualX = initialTx;
let actualY = initialTy;

// Smarter
while (true) {
    const remainingTurns = parseInt(readline()); 
    let dirX ='';
    let dirY = '';
    if (actualX < lightX) {
        actualX++;
        dirX = 'E';
    }
    if (actualX > lightX) {
        actualX--;
        dirX = 'W';
    }
    if (actualY < lightY) {
        actualY++;
        dirY = 'S';
    }
    if (actualY > lightY) {
        actualY--;
        dirY = 'N';
    }
    console.log(dirY + dirX);
}

// version moins smart
while (true) {
    if (actualX < lightX) {
        actualX++;
        if (actualY < lightY) {
            actualY++;
            console.log('SE');
        } else if ((actualY > lightY)) {
            actualY--;
            console.log('NE');
        } else {
            console.log('E');
        }
    } else if (actualX > lightX) {
        actualX--;
        if (actualY < lightY) {
            actualY++;
            console.log('SW');
        } else if ((actualY > lightY)) {
            actualY--;
            console.log('NW');
        } else {
            console.log('W');
        }
    } else {
        if (actualY < lightY) {
            actualY++;
            console.log('S');
        } else if ((actualY > lightY)) {
            actualY--;
            console.log('N');
        }
    }
}