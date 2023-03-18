const path = require('path')
const express = require('express')
const app = express()

const port = 3100;

app.use('/static', express.static('static')) // for serving static file
app.use(express.urlencoded()) // middleware for body.request get 
app.set('view engine', 'pug') // // Set pug as templating engine
app.set('views', './display') // set the views directory


app.get('/',(req, res)=>{
    res.status(200).render('index', { })
})


app.get('/about', (req, res)=>{
    const params = {}    
})







app.listen(port, ()=>{
    console.log(`server is running on ${port} port`);
})


