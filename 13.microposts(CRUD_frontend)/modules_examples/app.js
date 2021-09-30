///////////////////////////////
// Common JS Module syntax
// const person = require('./esModule');

//////////////////////////////
// ES2015 Module syntax
// import { person, sayHello } from './esModule1';
console.log(mod.person.name);
console.log(mod.sayHello());

// or
import * as mod from './esModule1'; //import everything

console.log(mod.person.name);
console.log(mod.sayHello());

//or (import as default)
import greeting from './esModule1';

console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');
