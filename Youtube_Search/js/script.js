//Searchbar Handler
$(document).ready(function () {
  var searchField = $("#query");
  var icon = $("#search-btn");

  //Focus Handler
  $(searchField).on("click", function () {
    $(this).animate(
      {
        width: "100%",
      },
      500
    );
    $(icon).animate(
      {
        right: "10px",
      },
      500
    );
  });
  // Blur Event Handler
  $(searchField).on("blur", function () {
    if (searchField.val() == "") {
      $(searchField).animate(
        {
          width: "45%",
        },
        500
      );
      $(icon).animate(
        {
          right: "360px",
        },
        500
      );
    }
  });

  $("#search-form").submit(function (e) {
    e.preventDefault();
  });
});

function search() {
  // Clear Result
  $("#result").html("");
  $("#buttons").html("");

  // Get Form Inupt
  q = $("#query").val();

  $.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      part: "snippet,id",
      q: q,
      type: "video",
      key: "AIzaSyDUQUDfpg_6iA_ycnD5yaAYLSPc495aa8w",
    },
    function (data) {
      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;

      // Log Data
      console.log(data);

      $.each(data.items, function (i, item) {
        // Get Ouput
        var output = getOutput(item);

        // Display Result
        $("#results").append(output);
      });

      var buttons = getButtons(prevPageToken, nextPageToken);

      // Display Buttons
      $("#buttons").append(buttons);
    }
  );
}
