let score = 0;
let time = 10;

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  $.ajax({
    url: "https://random-word-api.herokuapp.com/word?number=1",
    method: "get",
    dataType: "json",
    success: function (data) {
      $("#word").text(data);
    },
  });
}

function updateScore() {
  score++;
  $("#score").html(score);
}

getRandomWord();

$("#text").on("input", function () {
  const insertedText = $(this).val();
  const randomWord = $("#word").text();
  if (insertedText === randomWord) {
    updateScore();
    getRandomWord();
    $(this).val("");

    if (difficulty == "hard") {
      time += 3;
    } else if (difficulty == "medium") {
      time += 6;
    } else {
      time += 8;
    }
    updateTime();
  }
});

function updateTime() {
  var timeEl = $("#time");
  time--;
  timeEl.html(time + "s");
  if (time === 0) {
    clearInterval(time);
    gameOver();
  }
}

function gameOver() {
  const endgameEl = $("#end-game-container");
  endgameEl.html(`
  <h1>Time ran out</h1>
  <p>Your final score is ${score}</p>
  <button onclick="location.reload()">Reload</button>
  `);

  endgameEl.css("display", "flex");
}
