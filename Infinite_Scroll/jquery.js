let limit = 5;
let page = 1;

function showPosts() {
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
    method: "get",
    dataType: "json",
    success: function (data) {
      $.each(data, function (index, post) {
        const postEl = $("<div>").addClass("post");
        postEl.html(`
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>
      `);
        $("#posts-container").append(postEl);
      });
    },
  });
}

showPosts();

function showLoading() {
  $(".loader").addClass("show");
  setTimeout(() => {
    $(".loader").removeClass("show");
    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

$(window).scroll(function () {
  if ($(document).scrollTop() + $(window).height() > $(document).height() - 5) {
    showLoading();
  }
});
