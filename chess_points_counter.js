// On reçoit une ligne de case d'echec par readline avec un point
// si la case est vide, une lettre en maj pour une pièce blanche
// ou une lettre en min pour une pièce noire.
// On doit compter les points de chaque côté en fonction de la valeur des pièces et dire qui a le plus

const obj = {
  p:1,
  b:3,
  n:3,
  r:5,
  q:9
}
let black = 0
let white = 0

for (let i = 0; i < 8; i++) {
    
  const line = readline();
  const oneLine = line.split('');

  for (const e of oneLine) {
    if (e.match(/[a-z]/g)) {
      black += obj[e];
    } else if (e.match(/[A-Z]/g)) {
      white += obj[e.toLowerCase()];
    }
  }
}

if (black > white) {
  console.log(`black is better ${white} ${black}`);
} else if (white > black) {
  console.log(`white is better ${white} ${black}`);
} else {
  console.log(`equal ${white} ${black}`);
}
