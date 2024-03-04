const express = require("express");
const bodyParser = require("body-parser");
const modules = require(__dirname + "/custom modules/modules.js");
const _=require("lodash");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


let general_tasks = [];
let specific_lists= [];

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

app.get("/createlist",function(req,res){
  res.render("createlist");
})
app.post("/createlist",function(req,res){

  let TasksOfList=[];
  
  let listObject={
    'listTitle':req.body.addNewList,
    'listTasks':TasksOfList
  }
  specific_lists.push(listObject);
  res.redirect("/lists/"+_.kebabCase(req.body.addNewList))
})

app.get("/lists/:list",function(req,res){
  let placeholder = modules.setPlaceholder();
  let listParam = _.kebabCase(req.params.list);
  specific_lists.forEach(list => {
    if(listParam===_.kebabCase(list.listTitle)){
        res.render("lists",{
          listTitle:_.kebabCase(list.listTitle),
          toDoItem:list.listTasks,
          placeholder:placeholder
        })
    }
  });

})


app.post("/lists/:list", function(req, res) {
    let listParam = _.kebabCase(req.params.list);
    specific_lists.forEach(list => {
      if(listParam===_.kebabCase(list.listTitle)){
        let task = req.body.addList;
        modules.setTask(list.listTasks, task);
        res.redirect("/lists/"+listParam);
      }
    });
  });


app.listen(3000, function (req, res) {
  console.log("server is running.");
});

