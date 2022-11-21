//fetching the required libraries::
const express = require("express");
const path = require("path");
const hbs = require("hbs");

//creating the express instance::
const app = express();

//creating the port environment::
const port = process.env.PORT || 3000;

//paths
const partials_path = path.join(__dirname, "../templates/partials")
const templatePath = path.join(__dirname, "../templates/views");
console.log(partials_path)



//setting views address and seeting up hbs::
app.set("view engine", "hbs")
app.set("views", templatePath);

hbs.registerPartials(partials_path);

//using middlewares::
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

//rendering/routing our web-pages::
app.get("", (req, res)=>{
    res.render("index");
})

app.get("/weather", (req, res)=>{
    res.render("weather");
})

app.get("/about", (req, res)=>{
    res.render("about");
})

app.get("/aboutMe", (req, res)=>{
    res.render("aboutMe");
})

app.get("*", (req, res)=>{
    res.render("404");
})

//listening to the port::
app.listen(port, (err)=>{
    if (err) throw err;
    console.log(`listening to port ${port}`);
})
