var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require("body-parser");
mongoose.connect('mongodb://localhost/wikdb');
var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', require('./routes/api'));

app.listen(8080);
console.log("Start 8080");