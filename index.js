import  express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { workerData } from "worker_threads";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


var page = "daily";
var dailyTasks = [];
var workTasks = [];

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Rest of your code

app.get("/",(req,res)=>{
res.render(__dirname + "/public/views/index.ejs")


})

app.get("/memory-game",(req,res) =>{
    res.render(__dirname + "/public/views/memory-game/EL6-6_4ST Gioco Memory/memory.ejs")
})

app.get("/todo-list",(req,res) =>{
   
    page = "daily";
    //console.log(page)
    res.render(__dirname + "/public/views/todo-index.ejs", { tasks: dailyTasks, page })
})

app.listen(port,()=>{

    console.log("server listen on port: " + port)
})

//ToDo List application

app.get("/work", (req, res) => {
    page = "work"
    //console.log(page)
    res.render(__dirname + "/public/views/todo-index.ejs", { tasks: workTasks, page })


})


app.post("/todo-list", (req, res) => {

    page = "daily";
    dailyTasks.push(req.body.newTask);
    res.render(__dirname + "/public/views/todo-index.ejs", { tasks: dailyTasks, page })

})

app.post("/work", (req, res) => {

    page = "work"
    //console.log(req.body.newTask)
    workTasks.push(req.body.newTask);
    res.render(__dirname + "/public/views/todo-index.ejs", { tasks: workTasks, page })

})


