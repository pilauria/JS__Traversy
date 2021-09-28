import { getItemsFromStorage } from './storagectrl.js';

// Item Constructor
function Item(id, name, calories) {
  this.id = id;
  this.name = name;
  this.calories = calories;
}

// Data Structure / State
const data = {
  items: getItemsFromStorage(),
  currentItem: null,
  totalCalories: 0,
};

// Public methods
export function getItems() {
  return data.items;
}

export function addItem(name, calories) {
  let ID;
  // Create ID
  if (data.items.length > 0) {
    ID = data.items[data.items.length - 1].id + 1;
  } else {
    ID = 0;
  }

  // Calories to number
  calories = parseInt(calories);

  // Create new item
  const newItem = new Item(ID, name, calories);

  // Add to items array
  data.items.push(newItem);

  return newItem;
}

export function getItemById(id) {
  let found = null;
  // Loop through items
  data.items.forEach(function (item) {
    if (item.id === id) {
      found = item;
    }
  });
  return found;
}

export function updateItem(name, calories) {
  // Calories to number
  calories = parseInt(calories);

  let found = null;

  data.items.forEach(function (item) {
    if (item.id === data.currentItem.id) {
      item.name = name;
      item.calories = calories;
      found = item;
    }
  });
  return found;
}

export function deleteItem(id) {
  // Get ids
  const ids = data.items.map(function (item) {
    return item.id;
  });

  // Get index
  const index = ids.indexOf(id);

  // Remove item
  data.items.splice(index, 1);
}

export function clearAllItems() {
  data.items = [];
}

export function setCurrentItem(item) {
  data.currentItem = item;
}

export function getCurrentItem() {
  return data.currentItem;
}

export function getTotalCalories() {
  // Set total cal in data structure
  data.totalCalories = data.items.reduce((acc, item) => {
    return acc + Number(item.calories);
  }, 0);

  // Return total
  return data.totalCalories;
}

export function logData() {
  return data;
}
