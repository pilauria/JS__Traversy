////////////////////////
// // EXAMINE THE DOM //
///////////////////////

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0]; //select the first form of the document
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;
// console.log(scripts); // gives an HTML collection (we need to convert it to an array to work with it)

// let scriptsArr = Array.from(scripts); // convert the HTML collection to an array, so we can loop over it

// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

////////////////////////////////////////////////////////////
// // SELECTING ELEMENTS AND USING METHODS TO CHANGE THEM //
////////////////////////////////////////////////////////////

// // DOM SELECTORS FOR SINGLE ELEMENTS //
// -------------------------------- //
// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#f3f'; // we can apply all the methods we use in CSS
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '15px';
// taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks'; // innerText pay attention to the style (most of the time we can use textContent/innerText interchangeably)
// taskTitle.innerHTML = '<span style="color:blue">Task List</span>'; // (to insert a chunk of HTML: innerHTML. Put the selected element inside the parent element)

// -------------------------------- //
// document.querySelector()  // we can select any CSS selector with this

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5')); // if there is more than 1 element, we get only the first one

// document.querySelector('li').style.color = 'red'; // just for the first one
// document.querySelector('ul li').style.color = 'blue';
// // with pseudoclasses
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // only for the first odd is targeted
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// // DOM SELECTORS FOR MULTIPLE ELEMENTS //
// (select more than 1 element (nodeList or HTML collection) that can be converted in arrays)
// -------------------------------- //
// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item'); //
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item'); // select all the ul with class= collection-item

// console.log(listItems);

// -------------------------------- //
// document.getElementsByTagName;

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// -------------------------------- //
// // document.querySelectorAll (returns a nodeList, that allow us to use array methods without conversion)

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function (item, index) {
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function (li, index) {
//   li.style.background = '#ccc';
// });

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#f5f5';
// }

// console.log(items);

// -------------------------------- //

////////////////////////////
// // TRAVERSING THE DOM // (moving up/down)
//////////////////////////
// let val;

// const list = document.querySelector('ul.collection'); //or just ('ul)')
// const listItem = document.querySelector('li.collection-item:first-child'); // select the first one

// val = list;
// val = listItem;

// -------------------------------- //
// // Get child nodes (returns a nodeList)
// val = list.childNodes; // try to avoid this because it consider also all the white space and breaks between the nodes (use the following: .children)
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType; (1)

// what type of nodes we have (.nodeType):
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// -------------------------------- //
//  Get children element nodes (returns an HTML collection)
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';

// -------------------------------- //
// //  Children of children
// val = list.children[3].children; // (ul =>li =>a)
// val = list.children[3].children[0]; // (ul =>li =>a)
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// -------------------------------- //
// // First child
// val = list.firstChild; // (returns a nodeList, same as childNodes)
// val = list.firstElementChild; // (use this to get only the elements)

// -------------------------------- //
// // Last child
// val = list.lastChild; // textNode;
// val = list.lastElementChild; // (the actual last last li item)

// -------------------------------- //
// // Count child elements
// val = list.childElementCount; // (5 li on the ul)

// -------------------------------- //
// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement; // (ul)
// val = listItem.parentElement.parentElement; // (div)

// -------------------------------- //
// // Get next sibling
// val = listItem.nextSibling; // textNode;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // (html collection)

// -------------------------------- //
// // Get prev sibling
// val = listItem.previousSibling; (textNode)
// val = listItem.previousElementSibling;
// console.log(val);

////////////////////////////
// //  CREATE ELEMENTS   //
//////////////////////////

// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append (append: put something inside something else)
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link element (a)
// const link = document.createElement('a');
// // Add classes to the link
// link.className = 'delete-item secondary-content';
// // Add the icon html (the X) to the link
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul (insert the li into the DOM)
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

//////////////////////////////////////
// // REPLACE AND REMOVE ELEMENT   //
////////////////////////////////////

// -------------------------------- //
// // Replace elements
// // Create new Element (a new Heading)
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // Parent of the h5
// const cardAction = document.querySelector('.card-action');

// console.log(newHeading);

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // -------------------------------- //
// // Remove elements
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //  Remove list item
// lis[0].remove();

// // Remove child elements
// list.removeChild(lis[3]);

// -------------------------------- //
// // CLASSES & ATTRIBUTES
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// console.log(link);
// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com'); // (edit the attribute)
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);

////////////////////////////////////////////
// // EVENT LISTENERS & THE EVENT OBJECT //
///////////////////////////////////////////

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//   //console.log('Clicked');

//   let val;

//   val = e;

//   // Event target element
//   val = e.target;
//   val = e.target.id; // (nothing logged because the element doesn't have an id)
//   val = e.target.className;
//   val = e.target.classList;

//   // Event type
//   val = e.type;

//   // Timestamp
//   val = e.timeStamp;

// // Coords event relative to the window
// val = e.clientY;
// val = e.clientX;

// // Coords event relative to the element
// val = e.offsetY;
// val = e.offsetX;

//   console.log(val);
// }

///////////////////////
// // MOUSE EVENTS  //
/////////////////////

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent); (mouseleave/mouse enter fires off just on the initil parent element)
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent); // (mouse over and mouse out fires off for any inner element: in-out of an element that is inside of that element)
// Mouseout
// card.addEventListener('mouseout', runEvent); // firesoff for any inner element
// Mousemove
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

///////////////////////////////
// // KEYBOARD & INPUT EVENTS//
//////////////////////////////

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select'); // (disable jquery script to see this)

// // Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
// select.addEventListener('change', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   console.log(e.target.value);

// heading.innerText = e.target.value;

// Get input value
// console.log(taskInput.value);

// e.preventDefault();
// }

///////////////////////////////////
// EVENT BUBBLING & DELEGATION  //
/////////////////////////////////
// the bubbling up of an event throug the dom (through its parents. Event to the children that target its parent)
// -------------------------------- //
// // Bubbling
// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card content');
// }); // the previous fires off (bubbling)

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// }); // all the previous fire off (bubbling)

// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// }); // all the previous fire off (bubbling)

// EVENT DELGATION (as the opposite of bubbling: we put the listener in one of the parents and then we use logic inside of the event handler to target the element that we actually want that click for or whatever type of event it is. Event on the parent to target children.)

// const delItem = document.querySelector('.delete-item'); // (the first a)

// delItem.addEventListener('click', deleteItem); // (we target just the first element so we need event delegation )

// document.body.addEventListener('click', deleteItem);
// // delete the whole line ( <li></li>)
// function deleteItem(e) {
//   // if (e.target.parentElement.className === 'delete-item secondary-content') {
//   //   console.log('delete item'); // we target the parent of the <i></i> => <a/>
//   //    }
//   // better to do with classList (with className we have to match exactly the class, so if for some reason we add or modify it, it wont work anymore):
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove(); // (here we target the li to remove it)
//   }
// }

// Another situation where you need to use event delegation is if you dynamically insert
// something into the dorm through JavaScript, for example, if we insert a new list item
// that was not there when the page loaded, then you also need to use event delegation
// So the whole definition of event delegation in simple terms is just putting the
// listener on a parent  of what you're looking for and then putting a condition in
// here to try to find the target (e.target), and then doing your functionality there.
