// IMMEDIATELY INVOCABLE FUNCTION EXPRESSION - IIFEs (A function we declare and run at the same time)
// Usefull when it comes to certain design pattern like module pattern
// (function () {
//   console.log('IIFE Ran...');
// })();

(function (name) {
  console.log(`Hello ${name}`);
})('Mimmo');

// PROPERTY METHODS (functions inside objects)
const todo = {
  add: function () {
    console.log('Add to do');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
