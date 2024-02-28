const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
let tasks=[];
app.get("/", function (req, res) {
    //to set the day 
  let today = new Date();
  let options = {
      day: "numeric",
      month: "long",
      weekday: "long",
    };
  let day=today.toLocaleDateString("en-US", options);
 
  // to render the list.ejs
  res.render("list", { dateOfTheDay: day,toDoItem:tasks});
});

app.post("/",function(req,res){
    let task=req.body.addList;
    tasks.push(task);
    res.redirect("/")
})
app.listen(3000, function (req, res) {
  console.log("server is running.");
});
