// Pour un jeu de températures données, trouver la plus proche de 0.
// Si pas de température, alors 0

 const n = parseInt(readline()); // the number of temperatures to analyse
 var inputs = readline().split(' ');
 let posTemps = [];
 let negTemps = [];
 let temp;
 // if undefined
 if (n === 0) {
     console.log(0);
 } else {
     for (let i = 0; i < n; i++) {
         const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
         
         // if 0
         if (t === 0) {
             console.log(t);
         }
         // > 0
         if (t > 0) {
             posTemps.push(t);
         } else
         // < 0
         {
             negTemps.push(t);
         }
     }
     console.error('pos :', posTemps);
     console.error('neg :', negTemps);
     posTemp = posTemps[0];
     for (let i = 0; i < posTemps.length; i++) {
         if (posTemp > posTemps[i]) {
             posTemp = posTemps[i];
         }
     }
     console.error(posTemp);
     negTemp = negTemps[0];
     for (let i = 0; i < negTemps.length; i++) {
         if (negTemp < negTemps[i]) {
             negTemp = negTemps[i];
         }
     }
     console.error(negTemp);
     if ((posTemp <= negTemp * -1) || negTemp === undefined ) {
         console.log(posTemp);
     } else if (((posTemp > Math.abs(negTemp)) || posTemp === undefined )) {
         console.log(negTemp);
     }
 }