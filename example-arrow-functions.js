// var names = ['Piotrek', 'Mietek', 'Wiesiek'];
//
// names.forEach(function(name){
//   console.log(`forEach, function: ${name}`);
// });
//
// names.forEach((name) => {
//   console.log(`forEach, =>: ${name}`);
// });
//
// names.forEach((name) => console.log(name));
//
// names.forEach(function(name) {console.log(name)});

// var returnMe = (name) => name + '!';
// console.log(returnMe('cipka'));

// var person = {
//   name: 'Grzesiu',
//   greet: function() {
//     names.forEach((name1) => {
//       console.log(this.name + ' says hi to ' + name1);
//     });
//   }
// }
//
// person.greet();

// Challenge area

function add (a,b){
  return a+b;
}

 var addStatement = (a,b) => {
   return a+b;
 }

var addExpression = (a,b) => a+b;

console.log(addExpression(10,13));

console.log(addStatement(1,6));
console.log(addStatement(4,1));



// console.log(add(1,3));
// console.log(add(9,0));
