// // Iterator Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     },
//   };
// }

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// Generator Example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID Creator
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

/* "Using an iterator is beneficial when the computational cost of processing a list is high. If you have a data source that is very large, it may cause problems in your program if you attempt to iterate over it because the entire collection has to be loaded.

With an iterator, you can load the data in chunks. This is more efficient because you only manipulate the part of the list that you need, without incurring the additional cost of processing the entire list.

An example could be that you have loaded data from a file or database, and you want to progressively display the information on the screen. You could create an iterator from the data and set up an event handler to grab a few items every time the event occurs. This is an example of what such an implementation might look like" */
