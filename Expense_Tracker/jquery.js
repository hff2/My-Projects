const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

let transactions = dummyTransactions;

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";

  // const item = document.createElement("li");
  const item = $("<li></li>");
  // item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.addClass(transaction.amount < 0 ? "minus" : "plus");
  // item.innerHTML = ``
  item.html(`${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> 
  <button class="delete-btn">x</button>
  `);
  // list.appendChild(item);
  $("#list").append(item);
}

//Init app
function init() {
  // list.innerHTML = "";
  $("#list").html("");
  transactions.forEach(addTransactionDOM);
}

init();
