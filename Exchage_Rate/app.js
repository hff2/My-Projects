const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//Fetch exchage rates and update the DOM
function caclulate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// Event listeners
currencyEl_one.addEventListener("change", caclulate);
amountEl_one.addEventListener("input", caclulate);
currencyEl_two.addEventListener("change", caclulate);
amountEl_two.addEventListener("input", caclulate);

caclulate();
