'use strict';
/* 
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

    }

    // console.log(add(2,3));
  }
  printAge();

  return age;
}

const firstName = 'Rohit';
calcAge(1991);
 */

 // variables
// console.log(me);
// console.log(job);
// console.log(year);

 var me = 'Rohit';
 let job = 'teacher';
 const year = 1991; 

 // funcions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a,b) {
    return a + b;
}

var addExpr = function(a,b) {
    return a + b;
}

var addArrow = (a,b) => a + b;


// Example

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

