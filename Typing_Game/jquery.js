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

getRandomWord();
