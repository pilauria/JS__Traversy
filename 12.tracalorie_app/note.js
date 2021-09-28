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
