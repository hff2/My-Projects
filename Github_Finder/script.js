$(document).ready(function () {
  $("#searchUser").on("change", function (e) {
    let username = e.target.value;
    $.ajax({
      url: "https://api.github.com/users/" + username,
      data: {
        client_id: "b9315bcd5a07fcd759d8",
        client_secret: "a2b698bf7e7c02f898197cf136d1a41f704ca8e4",
      },
      success: function insertProfile(user) {
        let obj = {};
        obj.avatar_url = user.avatar_url || "no data";
        obj.profile_url = user.html_url || "no data";
        obj.public_gists = user.public_gists || "no data";
        obj.public_repos = user.public_repos || "no data";
        obj.followers = user.followers || "no data";
        obj.following = user.following || "no data";
        obj.company = user.company || "no data";
        obj.location = user.location || "no data";
        obj.blog = user.blog || "no data";
        console.log(obj);
      },
    });
  });
});
