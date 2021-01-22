const songs = ["energy", "inspire", "smallguitar"];
let songIndex = 0;
loadSong(songs[songIndex]);

function loadSong(song) {
  $("#title").text(song);
  $("#audio").attr("src", `music/${song}.mp3`);
  $("#cover").attr("src", `images/${song}.jpg`);
}

function playSong() {
  $("#music-container").addClass("play");
  $("#play").find("i").attr("class", "fas fa-pause");
  $("#audio")[0].play();
}

function pauseSong() {
  $("#music-container").removeClass("play");
  $("#play").find("i").attr("class", "fas fa-play");
  $("#audio")[0].pause();
}

$("#play").click(function () {
  const isPlaying = $("#music-container").hasClass("play");
  if (isPlaying == true) {
    pauseSong();
  } else {
    playSong();
  }
});
