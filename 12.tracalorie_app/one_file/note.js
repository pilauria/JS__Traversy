/////////////////////////////////
// NOTE FOR THE 'EDIT' STATE
// Brad is repeating himself and not abstracting the repetitive code. It's much easier to just have one function to hide the buttons and one to show them. By using the spread operator, the buttons that you pass as arguments (as many as you want, depending on your needs) will be available inside the function as an array, and you just have to iterate. This has the advantage of reducing the code, and with the spread operator you don't have to care about how many arguments are passed.

// showBtn: function (...btns) {
//       btns.forEach(btn => btn.style.display = "inline-block");
//     },
// hideBtn: function (...btns) {
//       btns.forEach(btn => btn.style.display = "none");
//     },

// You can even shorten it to only one function:

// changeDisplayStyle: function (property, ...elements) {
//       elements.forEach(
//         element => (document.querySelector(element).style.display = property)
//       );
//     },
// So whenever you need to change the display style, you can call UICtrl.changeDisplayStyle().

// For example:

// showEditState: function () {
//       UICtrl.changeDisplayStyle(
//         'inline',
//         UISelectors.updateBtn,
//         UISelectors.deleteBtn,
//         UISelectors.backBtn
//       );
//       UICtrl.changeDisplayStyle('none', UISelectors.addBtn);
//     },

// The code you need if you want to keep the 'Enter' Keypress functionality
// 6 upvotes
// Bilaal · Lecture 109 · 1 year ago
// It's very simple :) In the UICtrl.clearEditState() & UICtrl.showEditState() Methods include the following code which sets the 'disabled' HTML attribute for form inputs:

// UICtrl.showEditState:

// // When in Edit State, "Add Meal" Button is hidden
// // Code below makes the button unclickable when hidden
// // Does NOT allow 'Enter' Keypress as the button is disabled

// document.querySelector(UISelectors.addBtn).disabled = true;
// UICtrl.clearEditState:

// // When Edit State is cleared, Add Meal Button is showing
// // Code below makes the button clickable again
// // This method allows 'Enter' Keypress when not in Edit State

// document.querySelector(UISelectors.addBtn).disabled = false;

// MODULES

// <script src="storage.js"></script>
// <script src="item.js"></script>
// <script src="ui.js"></script>
// <script src="app.js"></script>

// Barry's solution works well. Another possible solution is to use

// <script src="app.js" type="module"></script>
// And then in app.js at the top insert

// import { UICtrl } from "./UICtrl.js";
// import { StudentCtrl } from "./StudentCtrl.js";
// Then in UICtrl.js and StudentCtrl.js add to your IIFEs export

// export const StudentCtrl = (function() { ... })();
// export const UICtrl = (function() { ... })();
// This worked for me I'm not sure if it's best practice or anything but I like the readability.
