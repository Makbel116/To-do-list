
$(document).on("DOMContentLoaded",function (event) {
  var path = window.location.pathname;
   if (path === "/") {
    $('a[href="/"]').css("background-color", "#b499e2");
  }else {
    var specific_list = $(".specific_lists");
    for (var i = 0; i < specific_list.length; i++) {
      console.log("/lists/"+specific_list[i].textContent)
      console.log(path)
      if (path === ("/lists/"+specific_list[i].textContent.trim())) {
        $(specific_list[i]).css("background-color", "#b499e2");
      }
    }
  }
})