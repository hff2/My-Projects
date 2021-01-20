const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

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
  <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `);
  // list.appendChild(item);
  $("#list").append(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts

    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  // balance.innerText = `$${total}`;
  $("#balance").text(`$${total}`);
  $("#money-plus").text(`$${income}`);
  $("#money-minus").text(`$${expense}`);
}

function addTransaction(e) {
  e.preventDefault();
  // if (text.value.trim() === "" || amount.value.trim() === "") {
  if ($("#text").val().trim() === "" || $("#amount").val().trim() === "") {
    alert("Please add a text and amount");
  } else {
    const transaction = {
      id: generateID(),
      // text: text.value,
      text: $("#text").val(),
      // amount: +amount.value,
      amount: +$("#amount").val(),
    };
    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();

    updateLocalStorage();

    // text.value = "";
    $("#text").val("");
    $("#amount").val("");
  }
}

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  updateLocalStorage();

  init();
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

//Init app
function init() {
  // list.innerHTML = "";
  $("#list").html("");
  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

// form.addEventListener("submit", addTransaction);
$("#form").submit(addTransaction);
