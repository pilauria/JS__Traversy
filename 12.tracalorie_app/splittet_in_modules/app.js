import {
  addItem,
  getItemById,
  getTotalCalories,
  setCurrentItem,
  updateItem,
  getCurrentItem,
  deleteItem,
  clearAllItems,
  getItems,
} from './modules/itemctrl.js';

import {
  clearItemsFromStorage,
  deleteItemFromStorage,
  storeItem,
  updateItemStorage,
} from './modules/storagectrl.js';

import {
  addItemToForm,
  addListItem,
  clearEditState,
  clearInput,
  deleteListItem,
  getItemInput,
  getSelectors,
  hideList,
  populateItemList,
  removeItems,
  showTotalCalories,
  updateListItem,
} from './modules/uictrl.js';

// App Controller
// Load event listeners
const loadEventListeners = function () {
  // Get UI selectors
  const UISelectors = getSelectors();

  // Add item event
  document
    .querySelector(UISelectors.addBtn)
    .addEventListener('click', itemAddSubmit);

  // Disable submit on enter
  document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
  });

  // Edit icon click event
  document
    .querySelector(UISelectors.itemList)
    .addEventListener('click', itemEditClick);

  // Update item event
  document
    .querySelector(UISelectors.updateBtn)
    .addEventListener('click', itemUpdateSubmit);

  // Delete item event
  document
    .querySelector(UISelectors.deleteBtn)
    .addEventListener('click', itemDeleteSubmit);

  // Back button event
  document
    .querySelector(UISelectors.backBtn)
    .addEventListener('click', clearEditState);

  // Clear items event
  document
    .querySelector(UISelectors.clearBtn)
    .addEventListener('click', clearAllItemsClick);
};

// Add item submit
const itemAddSubmit = function (e) {
  // Get form input from UI Controller
  const input = getItemInput();

  // Check for name and calorie input
  if (input.name !== '' && input.calories !== '') {
    // Add item
    const newItem = addItem(input.name, input.calories);

    // Add item to UI list
    addListItem(newItem);

    // Get total calories
    const totalCalories = getTotalCalories();
    // Add total calories to UI
    showTotalCalories(totalCalories);

    //Store in localStorage
    storeItem(newItem);

    // Clear fields
    clearInput();
  }

  e.preventDefault();
};

// Click edit item
const itemEditClick = function (e) {
  if (e.target.classList.contains('edit-item')) {
    // Get list item id (item-0, item-1)
    const listId = e.target.parentNode.parentNode.id;

    // Break into an array
    const listIdArr = listId.split('-');

    // Get the actual id
    const id = parseInt(listIdArr[1]);

    // Get item
    const itemToEdit = getItemById(id);

    // Set current item
    setCurrentItem(itemToEdit);

    // Add item to form
    addItemToForm();
  }

  e.preventDefault();
};

// Update item submit
const itemUpdateSubmit = function (e) {
  // Get item input
  const input = getItemInput();

  // Update item
  const updatedItem = updateItem(input.name, input.calories);

  // Update UI
  updateListItem(updatedItem);

  // Get total calories
  const totalCalories = getTotalCalories();
  // Add total calories to UI
  showTotalCalories(totalCalories);

  // Update local storage
  updateItemStorage(updatedItem);

  clearEditState();

  e.preventDefault();
};

// Delete button event
const itemDeleteSubmit = function (e) {
  // Get current item
  const currentItem = getCurrentItem();

  // Delete from data structure
  deleteItem(currentItem);

  // Delete from UI
  deleteListItem(currentItem.id);

  // Get total calories
  const totalCalories = getTotalCalories();
  // Add total calories to UI
  showTotalCalories(totalCalories);

  // Delete from local storage
  deleteItemFromStorage(currentItem.id);

  clearEditState();

  e.preventDefault();
};

// Clear items event
const clearAllItemsClick = function () {
  // Delete all items from data structure
  clearAllItems();

  // Get total calories
  const totalCalories = ItemCtrl.getTotalCalories();
  // Add total calories to UI
  showTotalCalories(totalCalories);

  // Remove from UI
  removeItems();

  // Clear from local storage
  clearItemsFromStorage();

  // Hide UL
  hideList();
};

// Public methods
function init() {
  // Clear edit state / set initial set
  clearEditState();

  // Fetch items from data structure
  const items = getItems();

  // Check if any items
  if (items.length === 0) {
    hideList();
  } else {
    // Populate list with items
    populateItemList(items);
  }

  // Get total calories
  const totalCalories = getTotalCalories();
  // Add total calories to UI
  showTotalCalories(totalCalories);

  // Load event listeners
  loadEventListeners();
}

// Initialize App
init();
