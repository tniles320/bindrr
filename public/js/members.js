$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/clients", (req, res) => {
    console.log(req)
  }).then(data => {
    $("#first-name").val(data[0].first_name);
    $("#last-name").val(data[0].last_name);
    $("#gender").val(data[0].gender);
    $("#client-email").val(data[0].email);
    $("#phone").val(data[0].phone);
    $("#follow-up").val(data[0].wants_follow_up);
    $("#last-follow-up").val(data[0].last_follow_up);
    $("comments").val(data[0].comment);
  });
});
