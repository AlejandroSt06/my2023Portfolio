import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
var page = "daily";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

var dailyTasks = [];
var workTasks = [];

app.get("/", (req, res) => {
    page = "daily"
    //console.log(page)
    res.render("index.ejs", { tasks: dailyTasks, page })

})

app.get("/work", (req, res) => {
    page = "work"
    //console.log(page)
    res.render("index.ejs", { tasks: workTasks, page })


})


app.post("/", (req, res) => {


    
    dailyTasks.push(req.body.newTask);
    res.render("index.ejs", { tasks: dailyTasks, page })

})

app.post("/work", (req, res) => {


    //console.log(req.body.newTask)
    workTasks.push(req.body.newTask);
    res.render("index.ejs", { tasks: workTasks, page })

})


    .listen(port, () => {

        console.log("Server listen on port: " + port)
    })
