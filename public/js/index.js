
$(document).on("DOMContentLoaded",function (event) {
  var path = window.location.pathname;
  if (path === "/work") {
    $('a[href="work"]').css("background-color", "#b499e2");
  } else if (path === "/") {
    $('a[href="/"]').css("background-color", "#b499e2");
  }
})