const msgEl = document.getElementById("msg");
const randomNum = getRandomNumber();
console.log("Number:", randomNum);

// Generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
