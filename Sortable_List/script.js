const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const powerfulBrands = [
  "American Express Co",
  "Amazon.com Inc.",
  "International Business Machines",
  "Johnson & Johnson",
  "Apple Inc.",
  "Coca-Cola Company",
  "The Walt Disney Company",
  "PepsiCo Inc.",
  "Google-Alphabet",
  "Microsoft Corp.",
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...powerfulBrands]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((company, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="company-name">${company}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
