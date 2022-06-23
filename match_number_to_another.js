// Faire matcher un nombre donnée en entrée à un autre selon la correspondance suivante :
// 0123456789 --> 9876543210

 const sort = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 const sortReverse = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
 const N = parseInt(readline());
 for (let i = 0; i < N; i++) {
     const X = parseInt(readline());
     console.error(sort.indexOf(X));
     console.error(sortReverse[sort.indexOf(X)]);
     console.log(sortReverse[sort.indexOf(X)]);
 }
