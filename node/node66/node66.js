const fs = require('fs')
const http = require('http')

let data = fs.readFileSync('../js/data1.txt')

const server = http.createServer((req, res)=>{
    // res.writeHead(200,{'content-type':'text/html'});
    res.end(data)

})
server.listen(8000,()=>{
    console.log('server listening 80');
})