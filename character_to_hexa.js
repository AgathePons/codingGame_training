// Issu d'un clash reverse
// On récupère une string qu'on veut convertir selon le pattern suivant :
// pour chaque caractère, x<hexadecimalnumber> pour obtenir une string du type x45x8cx85xff

 const s = readline();

 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 console.error('code :', s.charCodeAt(0));
 let string = '';
 for (let i = 0; i < s.length; i++) {
     console.error('code hex: ', s.charCodeAt(i).toString(16));
     string += 'x';
     string += s.charCodeAt(i).toString(16);
 }
 
 console.log(string);