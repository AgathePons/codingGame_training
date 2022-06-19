// Trouver la moitiée du caractère ASCII donné en entrée, c'est-à-dire le caractère dont le code ASCII est la moitiée
// (arrondi au plus bas) du code ASCII du caractère donné

 const s = readline();

 console.error('character', s);
 console.error('code', s.charCodeAt(0));
 codeOfS = s.charCodeAt(0);
 
 codeToFind = Math.floor(codeOfS / 2);
 console.error('code to find', codeToFind);
 
 console.log(String.fromCharCode(codeToFind));