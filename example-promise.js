// function getTempCallback(location, callback) {
//     callback(undefined, 23);
//     callback('Nie ma takiego miasta Londyn');
// }
//
// getTempCallback('Warsaw', function(err, temp) {
//     if (err) {
//         console.log('error error: ', err);
//     } else {
//         console.log('Success: ', temp)
//     }
//
// });
//
// console.log('--------------- brejko brejko ---------------');
//
// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(25);
//             reject('To co mi pan nic nie mówi!');
//         }, 5000 )
//     });
// }
//
// getTempPromise('Warsaw').then(function(temp) {
//     console.log('Promise Success: ', temp);
// }, function(err) {
//     console.log('Promise error:', err);
// });

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      } else {
        reject('Wypierdalaj!');
      }
    });
}

addPromise(4, "cipa").then(function(result) {
    console.log('Wynik: ', result);
}, function(err) {
  console.log('ERROR, ERROR: ', err);
});
