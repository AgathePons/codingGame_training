// avec ce genre de jeu de données en entrées, reporter les plaques roulant à plus de 130km/h, avec leur vitesse enregistrée, et triées par ordre alphabétique.

/* FH-790-HH A21-42 1620040132000
ET-318-NQ A21-42 1620040623000
BV-670-GV A21-42 1620040665000
FH-790-HH A21-55 1620040747000
DV-046-YY A21-42 1620040839000
ET-318-NQ A21-55 1620041044000
BV-670-GV A21-55 1620041071000
FZ-792-EC A21-42 1620041284000
DV-046-YY A21-55 1620041326000
FZ-792-EC A21-55 1620041633000
BP-301-UL A21-42 1620041863000
BV-047-TT A21-42 1620042133000
BP-301-UL A21-55 1620042487000
BV-047-TT A21-55 1620042570000
FT-918-CZ A21-42 1620042842000
DZ-507-JZ A21-42 1620043072000
DF-857-ZR A21-42 1620043398000
FT-918-CZ A21-55 1620043609000
DZ-507-JZ A21-55 1620043803000
DF-857-ZR A21-55 1620043835000 */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/ 
 const N = parseInt(readline());
 const allInputs = [];
 const minimumTime = 360000;
 const plateToReport = [];
 for (let i = 0; i < N; i++) {
     var inputs = readline().split(' ');
     const plate = inputs[0];
     const radarname = inputs[1];
     const timestamp = parseInt(inputs[2]);
     allInputs.push({
         plate,
         radarname,
         timestamp,
     });
 }
 function compare(a, b) {
     if (a.plate < b.plate) {
         return -1;
     }
     if (a.plate > b.plate) {
         return 1;
     }
     return 0
 }
 const orderedInputs = allInputs.sort(compare);
 console.error(orderedInputs);
 for (let i = 0; i < orderedInputs.length; i = i + 2) {
     const carTime = orderedInputs[i+1].timestamp - orderedInputs[i].timestamp;
     console.error(carTime);
     if (carTime < minimumTime) {
         carSpeed = Math.floor(13 / (carTime / 1000 / 60 / 60));
         console.error(carSpeed);
         orderedInputs[i].plate += ' ';
         orderedInputs[i].plate += carSpeed;
         plateToReport.push(orderedInputs[i].plate);
     }
 }
 console.error(plateToReport);
 plateToReport.forEach(element => console.log(element));
 