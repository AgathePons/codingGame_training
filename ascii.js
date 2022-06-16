// on fournit une largeur et une hauteur de lettre dessinée en ASCII, un texte à dessiner en ASCII, et un modèle de jeu de caractères (alphabet + question mark) sous forme de plusieurs strings correspondant chacune à une ligne du dessin. Il va falloir slicer et concaténer ces string pour ne garder que les caractères qui composent le texte

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 const L = parseInt(readline());
 const H = parseInt(readline());
 const T = readline();
 /*for (let i = 0; i < H; i++) {
     const ROW = readline();
 }*/
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 const letterIndex = [];
 const wordArray = T.split('');
 for (letter of wordArray) {
     // if not a letter
     if (/^[a-zA-Z]/.test(letter) === false ) {
         letterIndex.push(26);
     }
     // if whitespace
     if (letter === ' ') {
         letterIndex.push(27);
     }
     // if letter
     index = alphabet.indexOf(letter.toLowerCase());
     console.error('letter :', letter, '// index : ', index);
     letterIndex.push(index);
 }
 
 console.error(letterIndex);
 
 for (let i = 0; i < H; i++) {
     let rowBuilded = '';
     const ROW = readline();
     //console.error(`--- The FULL ROW ${i} ---`)
     //console.error(ROW);
     for (index of letterIndex) {
         rowBuilded = rowBuilded + ROW.slice(index * L, index * L + L);
     }
     console.log(rowBuilded);
 }
 