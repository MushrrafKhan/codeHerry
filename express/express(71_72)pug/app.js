const path = require('path')
const express = require('express')
const app = express()

const port = 8091;

app.use('/static', express.static('static')) // for serving static file
app.set('view engine', 'pug') // // Set pug as template engine
app.set('views', './template') // set the views directory


// our pug demon endpoint
app.get('/demo', (req, res)=>{
    res.status(200).render('demo', { title:'Hey', message:'Hello from demo side!' })
    // console.log(req.url);
    // console.log(`__dirname ---- ${__dirname}`);
    // console.log('concat join method with __dirname ---- '+path.join(__dirname, 'view'));
})

app.get('/about',(req, res)=>{
    res.status(200).render('about', { title:'Hey', message:'Hello from about side!' })
})


app.get('/waste', (req, res)=>{
    res.status(404).send("This Page Harm")
})

app.listen(port, ()=>{
    console.log(`server is running on ${port} port`);
})


