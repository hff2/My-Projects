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
