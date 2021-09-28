/* MODULE PATTERN:
PURPOSES: 
-- create self contained code that avoid collisions of variables (namespace). 
Variables created inside a function are accessible only within that function(this is what 
it means by private),  but once you execute an IIFE and return a value and store it in a global variable, it would be accessible anywhere(this is what it means by public)
-- Reusability
-- Maintenability
-- It could be applied to a normal function or an IIFE, both represent a self-contained piece of code
-- They make use of CLOSURES*/
//////////////////////////////////////////
// Basic structure(blueprint for the module pattern)

// (function () {
//   // Declare here private vars and functions (we can't access them from outside the module)

//   return {
//     // Declare here public var and functions
//   };
// })();

////////////////////////////////////////////
// // STANDARD MODULE PATTERN

const UICtrl = (function () {
  let text = 'Hello Word';

  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  };

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();
UICtrl.changeText(); // can't access this variable from outside the module

console.log(UICtrl.text); // undefined, same reason

////////////////////////////////////////////
// REVEALING MODULE PATTERN

const ItemCtrl = (function () {
  let data = []; // our state
  // private methods:
  function add(item) {
    data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }
  // but now we reveal the above methods:
  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(2));

////////////////////////////////////////////
// Another example:

// // NORMAL FUNCTION
// function communication() {
//   let greet = 'Hello';
//   let goodbye = 'So long ';

//   const getGreet = function () {
//     let d = new Date();
//     if (d.toLocaleTimeString().includes('AM')) {
//       greet = 'Good Morning ';
//     } else {
//       greet = 'Hello ';
//     }
//     return greet;
//   };
//   // Making available getGreet outside of the function
//   const greeting = function (name) {
//     console.log(`${getGreet() + name}! Welcome to the course.`);
//   };
//   // Making methods and properties public (available outside of the function)
//   return {
//     greetUser: greeting,
//   };
// }

// var COMM = communication();
// COMM.greetUser('Pietro');

// COMM is the API that give me access to the module

// // same with IIFE
// var COMM = (function () {
//   let greet = 'Hello',
//     goodbye = 'So long ';

//   const getGreet = function () {
//     let d = new Date();
//     if (d.toLocaleTimeString().includes('AM')) {
//       greet = 'Good Morning ';
//     } else {
//       greet = 'Hello ';
//     }
//     return greet;
//   };
//   // Making available getGreet outside of the function (or as many properties/method as we need)
//   const greeting = function (name) {
//     console.log(`${getGreet() + name}! Welcome to the course.`);
//   };
//   // Making methods and properties public (available outside of the function)
//   return {
//     greetUser: greeting,
//   };
// })();

// COMM.greetUser('Mary');
