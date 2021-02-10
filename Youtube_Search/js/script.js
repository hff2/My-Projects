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
