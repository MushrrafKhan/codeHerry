const http = require('http')
const fs = require('fs')
// const portname = 8700;
// const hostname = '127.0.0.1'

const server = http.createServer((req, res)=>{
    console.log(req.url);
    let indData = fs.readFileSync('./index.html', 'utf-8')
    console.log(indData)

    // fs.writeFileSync('./index.html')
    // fs.writeFileSync('./contact.html')
    // let indData = fs.writeFileSync('./index.html')

    if(req.url == '/'){
        res.end(indData)
    }
    else if(req.url == '/about'){
        res.end(fs.readFileSync('./about.html'))
    }
    else if(req.url == '/service'){
        res.end(fs.readFileSync('./service.html'))
    }
    else{
        res.end('Page Not Found')
    }

    res.end('sdsd')
})


server.listen(8700, ()=>{
    console.log('server listen 8700')
})