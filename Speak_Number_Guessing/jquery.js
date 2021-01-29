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
  checkNumber(msg);
}

function writeMessage(msg) {
  $("#msg").html(`
    <div>You said: </div>
    <span class="box">${msg}</span>
  `);
}

function checkNumber(msg) {
  const num = +msg;

  // Check if valid number
  if (Number.isNaN(num)) {
    $("#msg").append("<div>That is not a valid number</div>");
    return;
  }

  // Check in range
  if (num > 100 || num < 1) {
    $("#msg").append("<div>Number must be between 1 and 100</div>");
    return;
  }

  // Check number
  if (num === randomNum) {
    $("body").html(`
      <h2>Congrats! You have guessed the number! <br><br>
      It was ${num}</h2>
      <button class="play-again" id="play-again">Play Again</button>
    `);
  } else if (num > randomNum) {
    $("#msg").append("<div>GO LOWER</div>");
  } else {
    $("#msg").append("<div>GO HIGHER</div>");
  }
}
recognition.addEventListener("result", onSpeak);

recognition.addEventListener("end", () => recognition.start());
