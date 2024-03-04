
$(document).on("DOMContentLoaded",function (event) {
  var path = window.location.pathname;
   if (path === "/") {
    $('a[href="/"]').css("background-color", "#b499e2");
  }
})