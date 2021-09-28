import { getCurrentItem } from './itemctrl.js';

// UI Controller
const UISelectors = {
  itemList: '#item-list',
  listItems: '#item-list li',
  addBtn: '.add-btn',
  updateBtn: '.update-btn',
  deleteBtn: '.delete-btn',
  backBtn: '.back-btn',
  clearBtn: '.clear-btn',
  itemNameInput: '#item-name',
  itemCaloriesInput: '#item-calories',
  totalCalories: '.total-calories',
};
export function populateItemList(items) {
  let html = '';

  items.forEach(function (item) {
    html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
  });

  // Insert list items
  document.querySelector(UISelectors.itemList).innerHTML = html;
}

export function getItemInput() {
  return {
    name: document.querySelector(UISelectors.itemNameInput).value,
    calories: document.querySelector(UISelectors.itemCaloriesInput).value,
  };
}

export function addListItem(item) {
  // Show the list
  document.querySelector(UISelectors.itemList).style.display = 'block';
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Add ID
  li.id = `item-${item.id}`;
  // Add HTML
  li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
  // Insert item
  document
    .querySelector(UISelectors.itemList)
    .insertAdjacentElement('beforeend', li);
}
export function updateListItem(item) {
  let listItems = document.querySelectorAll(UISelectors.listItems);

  // Turn Node list into array
  listItems = Array.from(listItems);

  listItems.forEach(function (listItem) {
    const itemID = listItem.getAttribute('id');

    if (itemID === `item-${item.id}`) {
      document.querySelector(
        `#${itemID}`
      ).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
    }
  });
}

export function deleteListItem(id) {
  const itemID = `#item-${id}`;
  const item = document.querySelector(itemID);
  item.remove();
}

export function clearInput() {
  document.querySelector(UISelectors.itemNameInput).value = '';
  document.querySelector(UISelectors.itemCaloriesInput).value = '';
}

export function addItemToForm() {
  document.querySelector(UISelectors.itemNameInput).value =
    getCurrentItem().name;
  document.querySelector(UISelectors.itemCaloriesInput).value =
    getCurrentItem().calories;
  showEditState();
}

export function removeItems() {
  let listItems = document.querySelectorAll(UISelectors.listItems);

  // Turn Node list into array
  listItems = Array.from(listItems);

  listItems.forEach(function (item) {
    item.remove();
  });
}

export function hideList() {
  document.querySelector(UISelectors.itemList).style.display = 'none';
}
export function showTotalCalories(totalCalories) {
  document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
}
export function clearEditState() {
  clearInput();
  document.querySelector(UISelectors.updateBtn).style.display = 'none';
  document.querySelector(UISelectors.deleteBtn).style.display = 'none';
  document.querySelector(UISelectors.backBtn).style.display = 'none';
  document.querySelector(UISelectors.addBtn).style.display = 'inline';
}

export function showEditState() {
  document.querySelector(UISelectors.updateBtn).style.display = 'inline';
  document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
  document.querySelector(UISelectors.backBtn).style.display = 'inline';
  document.querySelector(UISelectors.addBtn).style.display = 'none';
}

export function getSelectors() {
  return UISelectors;
}
