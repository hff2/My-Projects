let score = 0;
let time = 10;

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
  }
});
