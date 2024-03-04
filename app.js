const express = require("express");
const bodyParser = require("body-parser");
const modules = require(__dirname + "/custom modules/modules.js");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


let general_tasks = [];

app.get("/", function (req, res) {
  //to set the day
  let day = modules.Date();
  //to set the placeholder
  let placeholder = modules.setPlaceholder();


  // to render the list.ejs
  res.render("home", {
    listTitle: day,
    toDoItem: general_tasks,
    placeholder: placeholder,
  });

});

app.post("/", function (req, res) {
  let task = req.body.addList;
  modules.setTask(general_tasks, task);
  res.redirect("/");
});


app.listen(3000, function (req, res) {
  console.log("server is running.");
});

