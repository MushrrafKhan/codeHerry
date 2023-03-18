const express = require('express');
const app = express();
  
app.set('view engine', 'ejs');
  
app.get('/:name' , (req , res)=>{
    res.render("index" , {
        data : req.params.name
    });
})
  
app.listen(4000 , ()=>{
    console.log("server is running on port 4000");
})