
exports.Date=function () {
  let today = new Date();
  let options = {
    day: "numeric",
    month: "long",
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options);
}


let prePlaceholder = "";

exports.setPlaceholder =function(){
  let placeholder;
  if (prePlaceholder !== "") {
    placeholder = prePlaceholder;
    prePlaceholder = "";
  } else {
    placeholder = "New Task";
  }
  return placeholder;
}

exports.setTask = function (tasks,task) {

  if (task === "") {
    prePlaceholder = "Please enter a task first!!!";
  } else {
    tasks.push(task);
  }
  
}