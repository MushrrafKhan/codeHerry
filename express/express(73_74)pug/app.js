const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

const port = 3100;

app.use('/static', express.static('static')) // for serving static file
app.use(express.urlencoded()) // middleware for body.request get 
app.set('view engine', 'pug') // // Set pug as templating engine
app.set('views', './view') // set the views directory

// Home directory
app.get('/',(req, res)=>{
    res.status(200).render('demo', { title:'Hey', params:{message:'Hello from home side!'}})
})


// User SignUp Page Get
app.get('/signup', (req, res)=>{
    const con = "This is best content on the internet so far so use"
    const params = {'title': 'pubg is the best game', 'content':con}
    res.status(200).render('form', params)
})


// User SignUp Page Post
app.post('/create',(req, res)=>{
    names = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

   let data = `Name ${names} and age ${age} and gender ${gender} ${address} ${more}`
   console.log(data);
   fs.writeFileSync('gymInfo.txt',data)

    const params = {'message': 'Your form has been submitedd successfully'}
    res.status(200).render('demo', {'params':params, 'info':`Your name is = ${names}`})
})


// Custom Demo Page
app.get('/demo',(req, res)=>{
    res.status(200).render('demo', { title:'Hey', params:{message:'Hello from demo side!' }})
})


// Testing Purpose
// app.get('/form', (req, res)=>{
    // res.status(200).render('form', { title:'Hey', message:'Hello from demo side!' })
    // console.log(req.url);
    // console.log(`__dirname ---- ${__dirname}`);
    // console.log('concat join method with __dirname ---- '+path.join(__dirname, 'view'));
// })


// Port Listen
app.listen(port, ()=>{
    console.log(`server is running on ${port} port`);
})


