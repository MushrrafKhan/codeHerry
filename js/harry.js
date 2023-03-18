const http = require('http')
const express = require('express')
const app = express()
var fs = require('fs');


http.createServer(app.get('/people.json', (req, res) =>{

  fs.readFile('data1.txt', 'utf8', function (err, data) {
    
    debugger;

    if (err) throw err;
    
    console.log(data);
    res.end()
})
    

})).listen(3400, ()=>{
    console.log('server listening on port 3400 and i test commit')
})



















// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'mushrraf.deshwaly@gmail.com',
//     pass: ''
//   }
// });

// var mailOptions = {
//   from: 'mushrraf.deshwaly@gmail.com',
//   to: 'mushrafkhan131@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });




















// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   console.log(q)
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080,()=>{
//   console.log('port run on 8080')
// });




















/* var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    console.log(`form-------${form}`)

    form.parse(req, function (err, fields, files) {
      console.log(`files-------${files}`)
      console.log(`fields-------${fields}`)

      var oldpath = files.filetoupload.path;
      console.log(`oldpath-------${oldpath}`)

      var newpath = './Name' + files.filetoupload.name;
      console.log(`newpath-------${newpath}`)

      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080,()=>{
  console.log('Port run on 8080')
  console.log([ ] + [ ] )
});
 */




















// var fs = require('fs');

// fs.unlink('mynewfile1.txt',  function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });












// fs.open('mynewfile1.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });















// const http = require('http')
// const express = require('express')
// const app = express()

// http.createServer(app.get('/people.json', (req, res) =>{
//     // We want to set the content-type header so that the browser understands
//     //  the content of the res.
//     res.contentType('application/json');
  
//     // Normally, the data is fetched from a database, but we can cheat:
//     var people = [
//       { name: 'Dave', location: 'Atlanta' },
//       { name: 'Santa Claus', location: 'North Pole' },
//       { name: 'Man in the Moon', location: 'The Moon' }
//     ];
  
//     // Since the request is for a JSON representation of the people, we
//     //  should JSON serialize them. The built-in JSON.stringify() function
//     //  does that.
//     var peopleJSON = JSON.stringify(people);
  
//     // Now, we can use the res object's send method to push that string
//     //  of people JSON back to the browser in res to this request:
//     res.send(peopleJSON);
//   })).listen(3400, ()=>{
//     console.log('server listening on port 3400')
// })



























// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3200;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Harry Fitness</title>
//   </head>
//   <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet">
//   <link rel="stylesheet" href="css/style.css">
//   <style>
//       /* CSS Reset */
//       body {
//           font-family: 'Baloo Bhai', cursive;
//           color: white;
//           margin: 0px;
//           padding: 0px;
//           background: url('img/bg.jpg');
//       }
  
//       .left {
//           display: inline-block;
//           /* border: 2px solid red; */
//           position: absolute;
//           left: 60px;
//           top: 20px;
//       }
  
//       .left img {
//           width: 136px;
//           filter: invert(100%);
//       }
  
//       .left div {
//           line-height: 19px;
//           font-size: 26px;
//           text-align: center;
//       }
  
//       .mid {
//           display: block;
//           width: 36%;
//           margin: 29px auto;
//           /* border: 2px solid green; */
//       }
  
//       .right {
//           position: absolute;
//           right: 34px;
//           top: 43px;
//           display: inline-block;
//           /* border: 2px solid yellow; */
//       }
  
//       .navbar {
//           display: inline-block;
//       }
  
//       .navbar li {
//           display: inline-block;
//           font-size: 25px;
//       }
  
//       .navbar li a {
//           color: white;
//           text-decoration: none;
//           padding: 34px 23px;
  
//       }
  
//       .navbar li a:hover,
//       .navbar li a.active {
//           text-decoration: underline;
//           color: grey;
  
//       }
  
//       .btn {
//           font-family: 'Baloo Bhai', cursive;
//           margin: 0px 9px;
//           background-color: black;
//           color: white;
//           padding: 4px 14px;
//           border: 2px solid grey;
//           border-radius: 10px;
//           font-size: 20px;
//           cursor: pointer;
//       }
  
//       .btn:hover {
//           background-color: rgb(31, 30, 30);
//       }
  
//       .container {
//           border: 2px solid white;
//           margin: 106px 80px;
//           padding: 75px;
//           width: 33%;
//           border-radius: 28px;
//       }
  
//       .form-group input {
//           font-family: 'Baloo Bhai', cursive;
//           text-align: center;
//           display: block;
//           width: 508px;
//           padding: 1px;
//           border: 2px solid black;
//           margin: 11px auto;
//           font-size: 25px;
//           border-radius: 8px;
//       }
  
//       .container h1 {
//           text-align: center;
//       }
  
//       .container button {
//           display: block;
//           width: 74%;
//           margin: 20px auto;
//       }
//   </style>
  
//   <body>
//       <header class="header">
//           <!-- Left box for logo -->
//           <div class="left">
//               <img src="img/gym.png" alt="">
//               <div>Harry Fitness</div>
//           </div>
//           <!-- Mid box for navbar -->
//           <div class="mid">
//               <ul class="navbar">
//                   <li><a href="#" class="active">Home</a></li>
//                   <li><a href="#">About Us</a></li>
//                   <li><a href="#">Fitness Calculator</a></li>
//                   <li><a href="#">Contact Us</a></li>
//               </ul>
//           </div>
  
//           <!-- Right box for buttons -->
//           <div class="right">
//               <button class="btn">Call Us Now</button>
//               <button class="btn">Email Us</button>
//           </div>
//       </header>
//       <div class="container">
//           <h1>Join the best gym of Delhi now</h1>
//           <form action="noaction.php">
//               <div class="form-group">
//                   <input type="text" name="" placeholder="Enter your Name">
//               </div>
//               <div class="form-group">
//                   <input type="text" name="" placeholder="Enter your Age">
//               </div>
//               <div class="form-group">
//                   <input type="text" name="" placeholder="Enter your Gender">
//               </div>
//               <div class="form-group">
//                   <input type="text" name="" placeholder="Enter your Locality">
//               </div>
//               <div class="form-group">
//                   <input type="text" name="" placeholder="Enter your Email Id">
//               </div>
//               <div class="form-group">
//                   <input type="text" name="" placeholder="Enter your Phone Number">
//               </div>
//               <button class="btn">Submit</button>
//           </form>
//       </div>
//   </body>
  
//   </html>
//   `);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });