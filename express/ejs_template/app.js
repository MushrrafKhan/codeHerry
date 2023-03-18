// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var express = require('express');
var app = express();
const port = 4000;
 
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
 
    // The render method takes the name of the HTML
    // page to be rendered as input.
    // This page should be in views folder in
    // the root directory.
    // We can pass multiple properties and values
    // as an object, here we are passing the only name

    var data = {name:'Mushrraf',Hobbies:['Coding', 'Nfak Songs', 'Story reading']}
    res.render('home', {detail:data});
     
    });
     
    var server = app.listen(port, function(){
        console.log(`listening to port ${port}`)
    });