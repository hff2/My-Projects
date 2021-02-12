const draggable_list = $("#draggable-list")[0];
const powerfulBrands = [
  "Apple Inc.",
  "Amazon.com Inc.",
  "Microsoft",
  "Google",
  "Samsung",
  "Coca-Cola",
  "Toyota",
  "Mercedes-Benz",
  "McDonald’s",
  "Disney",
];

const listItems = [];

let dragStartIndex;
createList();

function createList() {
  [...powerfulBrands]
    .map(function (data) {
      return {
        value: data,
        sort: Math.random(),
      };
    })
    .sort(function (a, b) {
      return a.sort - b.sort;
    })
    .map(function (data) {
      return data.value;
    })

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
  addEventListeners();
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function checkOrder() {
  listItems.forEach(function (listItem, index) {
    const randomBrands = listItem.querySelector(".draggable").innerText.trim();

    if (randomBrands !== powerfulBrands[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

$("#check").click(checkOrder);
