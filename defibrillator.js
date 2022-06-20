const LON = readline();
const LAT = readline();
console.error(`LON: ${LON} and LAT: ${LAT}`);
// convert in radian
const lon = LON.replaceAll(',', '.') * Math.PI / 180;
const lat = LAT.replaceAll(',', '.') * Math.PI / 180;
console.error(`INIT lon: ${lon} (${typeof(lon)}) and lat: ${lat} (${typeof(lat)})`);
//console.error(`INIT lon: ${parseFloat(LON.replaceAll(',', '.') * Math.PI / 180)} (${typeof(lon)}) and lat: ${parseFloat(LAT.replaceAll(',', '.') * Math.PI / 180)} (${typeof(lat)})`);
const N = parseInt(readline());
let distanceFromDefib;
let defibName;
// for each defib
for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    //console.error(DEFIB);
    defibArray = DEFIB.split(';');
    if (defibArray[0] === '107' || defibArray[0] === '108' || defibArray[0] === '59') {
        console.error(defibArray);
        // find name
        const name = defibArray[1];
        // find and convert lon et lat
        defibLon = defibArray[4].replaceAll(',', '.') * Math.PI / 180;
        defibLat = defibArray[5].replaceAll(',', '.') * Math.PI / 180;
        console.error(`defibLon: ${defibLon} (${typeof(defibLon)}) - defibLat: ${defibLat} (${typeof(defibLat)})`);
        // calc distance to DEFIB
        const x = (defibLon - lon) * Math.cos((lat + defibLat) / 2);
        const y = defibLon - lon;
        const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
        console.error(`x = ${x} /// y = ${y}`);
        console.error(`x² = ${x ** 2} /// y² = ${y ** 2}`);
        console.error(`distance: ${distance} (${typeof(distance)})`);
        // if distanceFromDefib undefined
        // or if distance from this defib is shorter than actual distance
        if (distanceFromDefib === undefined || distance < distanceFromDefib) {
            distanceFromDefib = distance;
            defibName = name;
        }
    }
   
}
console.error(`END distanceFromDefib: ${distanceFromDefib} and defibName: ${defibName}`);

console.log(defibName);