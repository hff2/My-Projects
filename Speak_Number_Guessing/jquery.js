const randomNum = getRandomNumber();
console.log("Number:", randomNum);

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function onSpeak(e) {
  const msg = e.results[0][0].transcript;
  writeMessage(msg);
}

function writeMessage(msg) {
  $("#msg").html(`
    <div>You said: </div>
    <span class="box">${msg}</span>
  `);
}
recognition.addEventListener("result", onSpeak);
