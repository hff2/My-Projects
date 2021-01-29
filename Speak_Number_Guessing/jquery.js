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
  console.log(e);
  const msg = e.results[0][0].transcript;
  console.log(msg);
}

recognition.addEventListener("result", onSpeak);
