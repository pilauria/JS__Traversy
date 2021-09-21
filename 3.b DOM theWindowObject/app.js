/*THE WINDOW OBJECT

Working with the UI up to this point, we've been just dealing with the core language and using the console as an output to see the results.
Before we get into the dom in the next section, I just want to take a few minutes to talk about and look at the window object.
Because the document object is actually part of the window object, as with many other things.
The Window is the global object in client side JavaScript.
And Node.js it's a JavaScript runtime that runs as a standalone process on your machine, in your computer.
So your system, your computer system is your environment in Node.js?
Whereas, in client side JavaScript, the window or the browser is the global environment.
And what's cool is no James and Chrome both use the same JavaScript engine called VATE and it works the same way. It's just in different environments.
The window object has a lot to it.
things that JavaScript developers use all the time, like local storage, the new Fetch API, the navigator object, which includes geolocation, and then it even includes methods like alert and prompt and confirm.
So I want to take a look at some of these properties and methods.

In the console of the browser we can look up the global object Window by just typing window, to see all the property it has
Alert, prompt,confirm
*/

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object (has to do with the actual browser, not the windows, the browser itself)
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
