import { verify } from 'jsonwebtoken';
const jwt = require('jsonwebtoken');


verify(token,"secret",(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log("Verified "+result);










// var buf = Buffer.from('abc');

// console.log(buf.toString());
// //Display the Buffer without converting it into a String:
// console.log(buf);



















// const http = require('http')
// const fs = require('fs')

// // const server = http.createServer((req, res) => {
// //   fs.readFile(__dirname + '/data.txt', (err, data) => {
// //     res.end(data)
// //   })
// // })
// // server.listen(3000)


// http.createServer((req, res) => {
//     data =  fs.createReadStream('./data1.txt', 'UTF8')
//    data.pipe(res)
    
// }).listen(3200,()=>{console.log(__dirname)})












// const fs = require('fs');
//  var contents =  fs.readFileSync('input.txt').toString();
// console.log(contents);










// buf = new Buffer(256);
// len = buf.write("Simply Easy Learning");

// console.log("Octets written : "+  len);












// var fs = require("fs");
// var zlib = require('zlib');

// // Compress the file input.txt to input.txt.gz
// fs.createReadStream('input.txt.pdf')
//    .pipe(fs.createWriteStream('input.txt'));
  
// console.log("File Compressed.")


















// var fs = require("fs");

// // Create a readable stream
// var readerStream = fs.createReadStream('data1txt');

// // Create a writable stream
// var writerStream = fs.createWriteStream('data2.txt');

// // Pipe the read and write operations
// // read input.txt and write data to output.txt
// readerStream.pipe(writerStream);

// console.log("Program Ended");


















// const fs = require('fs')
// const detail = 'this is data'


// const writerStream = fs.createWriteStream('testt.txt')

// writerStream.end(detail,'UTF8')

// writerStream.on('finish', () =>{console.log('file write succefully')})


















// const fs = require('fs');
// const detail = 'this is detail'

// const data = fs.createWriteStream('testing.txt')


// data.write(detail,'UTF8')

// data.end();

// data.on('finish', function() {
// 	console.log("Write completed.");
// });


















// const fs = require('fs')
// var data = 'Simply Easy Learning';


// const writerStream = fs.createWriteStream('test.txt')

// // writerStream.write(data,'UTF8');

// writerStream.write(data,'UTF8');

// // Mark the end of file
// writerStream.end();


// writerStream.on('finish', () => {console.log('mk')})

















// var fs = require("fs");
// var data = 'Simply Easy Learning';

// // Create a writable stream
// var writerStream = fs.createWriteStream('dd.txt');

// // Write the data to stream with encoding to be utf8
// writerStream.write(data,'UTF8');

// // Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on('finish', function() {
//    console.log("Write completed.");
// });

// writerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");






















// var fs = require("fs");
// // var data = 'dddd';

// // Create a readable stream
// var readerStream = fs.createReadStream('data.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
// 	console.log(chunk);
// });

// // readerStream.on('end',function() {
// // });

// // readerStream.on('error', function(err) {
// //    console.log(err.stack);
// // });

// // console.log("Program Ended");




















// const fs = require('fs')



// var readerStream = fs.createReadStream('input.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function() {
//    console.log(data);
// });

// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// data.setEncoding('UTF-8')



// data.on('data',chunk =>{
// 	console.log(chunk)
// })











// var fs = require("fs");
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('data.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
// 	console.log(data += chunk);
// });

// // readerStream.on('end',function() {
// //    console.log(data);
// // });

// // readerStream.on('error', function(err) {
// //    console.log(err.stack);
// // });

// console.log("Program Ended")
















// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   const stream = fs.createReadStream(__dirname + '.data.txt')
//   stream.pipe(res)
// })
// server.listen(3000)






















// // Importing events
// const EventEmitter = require('events');

// // Initializing event emitter instances
// var eventEmitter = new EventEmitter();

// // Declaring listener fun1 to myEvent1
// var fun1 = (msg) => {
// 	console.log("Message from fun1: " + msg);
// };

// // Declaring listener fun2 to myEvent2
// var fun2 = (msg) => {
// 	console.log("Message from fun2: " + msg);
// };

// // Listening to myEvent with fun1 and fun2
// eventEmitter.addListener('myEvent', fun1);

// // fun2 will be inserted in front of listeners array
// eventEmitter.prependListener('myEvent', fun2);

// eventEmitter.emit('myEvent', 'Event occurred');
// // Listing listeners
// console.log(eventEmitter.listeners('myEvent'));

// // Count the listeners registered to myEvent
// console.log(eventEmitter.listenerCount('myEvent'));

// // Triggering myEvent





















// // Importing events
// const EventEmitter = require('events');
  
// // Initializing event emitter instances 
// var eventEmitter1 = new EventEmitter();
// var eventEmitter2 = new EventEmitter();
  
// // Getting max listener
// console.log("Default max listener for eventEmitter1 is: ",
//                eventEmitter1.getMaxListeners());
// console.log("Default max listener for eventEmitter2 is: ",
//               eventEmitter2.getMaxListeners());
  
// // Set global deaultMaxListeners to 2
// EventEmitter.defaultMaxListeners = 2;
  
// // Getting max listener
// console.log("Default max listener for eventEmitter1 is: ",
//                eventEmitter1.listenerCount());
// console.log("Default max listener for eventEmitter2 is: ",
//                eventEmitter2.listenerCount());
  
// // Set max listener of eventEmitter1 to 5
// eventEmitter1.setMaxListeners(5);
  
// // Getting max listener
// console.log("Default max listener for eventEmitter1 is: ",
//                eventEmitter1.listenerCount());
// console.log("Default max listener for eventEmitter2 is: ",
//                eventEmitter2.listenerCount());
  
// // Declaring listener fun1 to myEvent1
// var fun1 = (msg) => {
//     console.log("Message from fun1: " + msg);
// };
  
// // Declaring listener fun2 to myEvent2
// var fun2 = (msg) => {
//     console.log("Message from fun2: " + msg);
// };
  
// // Listening to myEvent1 with 3 instance of fun1
// for(var i = 0; i < 3; i++) {
//     eventEmitter1.addListener('myEvent1', fun1)
// }
  
// // Listening to myEvent2 with 3 instance of fun2
// for(var i = 0; i < 3; i++){
//     eventEmitter2.addListener('myEvent2', fun2)
// }
  
// // Emitting myEvent1 and myEvent2
// eventEmitter1.emit('myEvent1', 'Event1 occurred');
// eventEmitter2.emit('myEvent2', 'Event2 occurred');





















// // Importing events
// const EventEmitter = require('events');
  
// // Initializing event emitter instances 
// var eventEmitter = new EventEmitter();
   
// var fun1 = (msg) => {
//     console.log("Message from fun1: " + msg);
// };
   
// var fun2 = (msg) => {
//     console.log("Message from fun2: " + msg);
// };
  
// // Registering fun1 and fun2
// eventEmitter.on('myEvent', fun1);
// eventEmitter.on('myEvent', fun1);
// eventEmitter.on('myEvent', fun2);
   
// // Removing listener fun1 that was
// // registered on the line 13
// eventEmitter.removeListener('myEvent', fun1);
   
// // Triggering myEvent
// eventEmitter.emit('myEvent', "Event occurred");
  
// // Removing all the listeners to myEvent
// eventEmitter.removeAllListeners('myEvent');
  
// // Triggering myEvent
// eventEmitter.emit('myEvent', "Event occurred");




















// var events = require("events");
// var eventEmitter = new events.EventEmitter();

// // listener #1
// var listner1 = function listner1() {
//   console.log("listner1 executed.");
// };

// // listener #2
// var listner2 = function listner2() {
//   console.log("listner2 executed.");
// };

// // Bind the connection event with the listner1 function
// eventEmitter.addListener("connection", listner1);
// // Bind the connection event with the listner2 function
// eventEmitter.on("connection", listner2);

// var eventListeners = require("events").EventEmitter.listenerCount(
//   eventEmitter,
//   "connection"
// );
// // Fire the connection event
// eventEmitter.emit("connection");

// console.log(eventListeners + " Listner(s) listening to connection event");


// // Remove the binding of listner1 function
// eventEmitter.removeListener("connection", listner1);
// console.log("Listner1 will not listen now.");

// // Fire the connection event
// eventEmitter.emit("connection");
// eventListeners = require("events").EventEmitter.listenerCount(
//   eventEmitter,
//   "connection"
// );
// console.log(eventListeners + " Listner(s) listening to connection event");
// console.log("Program Ended.");




















// (function a(){
//     b()
//     console.log('inner')
// }())

//     function b(){setTimeout(() => {
//         console.log('ininer')

//     },1000);}

// console.log(process.env["USERNAME"]);
// const args = process.argv.slice(2);
// console.log(process.env[args[0]]);

// const EventEmitter = require('events');
// class Stock extends EventEmitter {
//     constructor(symbol, price) {
//         super();
//         this._symbol = symbol;
//         this._price = price;
//     }
//     set price(newPrice) {
//         if (newPrice !== this._price) {
//             this.emit('PriceChanged', {
//                 symbol: this._symbol,
//                 oldPrice: this._price,
//                 newPrice: newPrice,
//                 adjustment: ((newPrice - this._price) * 100 / this._price).toFixed(2)
//             });
//         }
//     }
//     get price() {
//         return this._price;
//     }
//     get symbol() {
//         return this._symbol;
//     }
// }

// const stock = new Stock('AAPL', 700);

// stock.on('PriceChanged', (arg) => {
//     console.log(`The price of the stock ${arg.symbol} has changed ${arg.adjustment}%`);
// })

// stock.price = 720;

// const events = require('events');
// const emi = new events.EventEmitter();
// console.log(0)

// function i(){
//     emi.on('eventOne',(para)=>{
//         console.log(111)
//     })}

// console.log(1)
// i()
// emi.emit('eventOne')
// console.log(2)
// console.log(3)

// const events = require('events')
// const { on } = require('stream')
// const em = new events.EventEmitter()

// em.on('message', (msg)=>{
//     console.log(msg)

// })

// em.on('error', (err)=>{})

// em.emit('message',"how are you")
