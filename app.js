// Author: Edvin Lin 
// Purpose: Assignment
//ensure mongodb has a db named assignment with a collection named customers

const express = require("express");

const mongoose = require("mongoose");

const pug = require("pug");

const app = express();

const bodyParser = require('body-parser');

const path = require("path");

const customerController = require('./controllers/customerController'); 

const greetings = require('./public/scripts/greetings');

const { Customer } = require("./models/Customer");

//const thanks = require('./public/scripts/thanking');

const url = "mongodb://localhost/assignment";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

mongoose.Promise = global.Promise;

db.on("error", console.error.bind(console, "error connecting to mongoDB"));

db.once("open", ()=>{ console.log("Connected to MongoDB"); });

app.listen(8000, ()=>{
    console.log("Server has started on port 8000");
});

app.use(bodyParser.urlencoded({ extended: false }));


app.set("views", path.join(__dirname,"views"));
app.set("view engine", "pug");



/* Pages */
app.get("/", (req,res)=>{
    res.render("./index", {greet: greetings.greet()});
});

app.get("/index", (req,res)=> {
    res.render("./index", {greet:greetings.greet()});
});

app.get("/about", (req,res)=>{
    res.render("./about");
});

app.get("/contact", (req,res)=>{
    res.render("./contact");
});

app.post('/addCustomer', (req,res) =>{
    var customerData = new Customer(req.body);
    customerData.save()
    .then(item =>{
        res.redirect("./thanks");
    })
    .catch(err=>{
    res.status(400).send("Unable to send to database");
    });
    console.log("Sent to database")
});

app.get("/thanks", customerController.findLastInquiry);


app.get("/showcustomers", customerController.showCustomers);

app.use((req,res, next)=>{
  res.status(404).render("404");
});
