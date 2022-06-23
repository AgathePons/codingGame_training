// on reçoit une grille de largeur X et hauteur Y, on est positionné sur une case posX / posY et une bombe est sur un position inconnue, à chaque itération, on reçoit en infos dans quelle direction on doit aller (up, down, right, left, up-right, up-left, down-right, down-left), il faut atteindre la bombe. On a un nombre de tour limité (N)

var inputs = readline().split(' ');
const X = parseInt(inputs[0]); // width of the building.
const Y = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
console.error(`width ${X}, height ${Y}, turns left ${N}`);
var inputs = readline().split(' ');
let posX = parseInt(inputs[0]);
let posY = parseInt(inputs[1]);
const area = {
    minX: 0,
    maxX: X,
    minY: 0,
    maxY: Y,
}
console.error(`posX: ${posX}, posY: ${posY}`);
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    console.error(`direction: ${bombDir}`);
    let next = '';
    if (bombDir === 'R') {
        area.minX = posX;
        distanceX = area.maxX - posX;
        nextX = posX + Math.ceil(distanceX / 2);
        posX = nextX;
        next = `${posX} ${posY}`;
        console.log(next);
    }
    if (bombDir === 'L') {
        area.maxX = posX;
        distanceX = posX - area.minX;
        nextX = posX - Math.ceil(distanceX / 2);
        posX = nextX;
        next = `${posX} ${posY}`;
        console.log(next);
    }
    if (bombDir === 'D') {
        area.minY = posY;
        distanceY = area.maxY - posY;
        nextY = posY + Math.ceil(distanceY / 2);
        posY = nextY;
        next = `${posX} ${posY}`;
        console.log(next);
    }
    if (bombDir === 'U') {
        area.maxY = posY;
        distanceY = posY - area.minY;
        nextY = posY - Math.ceil(distanceY / 2);
        posY = nextY;
        next = `${posX} ${posY}`;
        console.log(next);
    }
    if (bombDir === 'DR') {
        // calc Right
        area.minX = posX;
        distanceX = area.maxX - posX;
        nextX = posX + Math.ceil(distanceX / 2);
        posX = nextX;
        // calc Down
        area.minY = posY;
        distanceY = area.maxY - posY;
        nextY = posY + Math.ceil(distanceY / 2);
        posY = nextY;
        // go
        next = `${posX} ${posY}`;
        console.log(next);
    }
    if (bombDir === 'UL') {
        // calc Left
        area.maxX = posX;
        distanceX = posX - area.minX;
        nextX = posX - Math.ceil(distanceX / 2);
        posX = nextX;
        // calc Up
        area.maxY = posY;
        distanceY = posY - area.minY;
        nextY = posY - Math.ceil(distanceY / 2);
        posY = nextY;
        // go
        next = `${posX} ${posY}`;
        console.log(next);
    }
    if (bombDir === 'DL') {
        // calc Left
        area.maxX = posX;
        distanceX = posX - area.minX;
        nextX = posX - Math.ceil(distanceX / 2);
        posX = nextX;
        // calc Down
        area.minY = posY;
        distanceY = area.maxY - posY;
        nextY = posY + Math.ceil(distanceY / 2);
        posY = nextY;
        // go
        next = `${posX} ${posY}`;
        console.log(next);
    }
    if (bombDir === 'UR') {
        // calc Right
        area.minX = posX;
        distanceX = area.maxX - posX;
        nextX = posX + Math.ceil(distanceX / 2);
        posX = nextX;
        // calc Up
        area.maxY = posY;
        distanceY = posY - area.minY;
        nextY = posY - Math.ceil(distanceY / 2);
        posY = nextY;
        //go
        next = `${posX} ${posY}`;
        console.log(next);
    }
}