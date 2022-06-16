// Pour un nombre n donné, on va récupérer les n premiers chiffres pairs, et les a additionner
// ex n = 4, on a 2, 4, 6, 8, on attend donc 20

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const n = parseInt(readline());
 console.error('n value :', n);
 const evenNumbers = [];
 let evenNumber = 2;
 for (i = 0; i < n; i++) {
     evenNumbers.push(evenNumber);
     evenNumber += 2;
     console.error(evenNumber);
 }
 console.error(evenNumbers);
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(evenNumbers.reduce((prevValue, curValue) => prevValue + curValue, 0));