// Default array to pre-populate the checklist on page load
const defaultGameDayItems = [
    "Pack the tailgate chairs",
    "Grab clear stadium bag",
    "Download digital tickets",
    "Bring garnet & black apparel"
];

// DOM Element Selectors
const checklistUl = document.getElementById('checklist');
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button');

// Counter to ensure every dynamically created checkbox gets a unique ID pairs with its label
let itemCounter = 0;

/**
 * Creates and appends a boxed checklist item to the DOM structure
 * @param {string} itemText - The text content for the task
 */
function createChecklistItem(itemText) {
    itemCounter++;
    const uniqueId = `item-${itemCounter}`;

    // 1. Create the main list item box layout container
    const li = document.createElement('li');
    li.className = 'checklist-item';

    // 2. Create the interactive checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = uniqueId;

    // 3. Create the text label bound to the unique checkbox ID
    const label = document.createElement('label');
    label.setAttribute('for', uniqueId);
    label.textContent = itemText;

    // 4. Assemble components and append them to the checklist wrapper frame
    li.appendChild(checkbox);
    li.appendChild(label);
    checklistUl.appendChild(li);
}

/**
 * Fired when a user submits a new custom item from the input layout box
 */
function handleAddItemSubmit() {
    const textValue = itemInput.value.trim();

    // Block submission execution if input validation fails empty string check
    if (textValue === '') {
        return;
    }

    // Append new item to list framework
    createChecklistItem(textValue);

    // Reset input interface layout controls focus
    itemInput.value = '';
    itemInput.focus();
}

// Initialize application state loop by processing the array values
function initChecklist() {
    defaultGameDayItems.forEach(item => {
        createChecklistItem(item);
    });
}

// ==========================================================================
// Event Listeners Configuration
// ==========================================================================

// Trigger item submit event loop when clicking the Add button element
addButton.addEventListener('click', handleAddItemSubmit);

// Trigger item submit event loop when pressing the Enter key inside the textbox element
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleAddItemSubmit();
    }
});

// Run initializer on document content mount execution cycle
document.addEventListener('DOMContentLoaded', initChecklist);
