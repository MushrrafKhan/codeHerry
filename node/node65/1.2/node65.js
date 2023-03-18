// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guranteed, if first method take time then next method run
// - callbacks will fire



const fs = require('fs')

fs.readFile('../../../js/data1.txt', 'utf-8',(err, data)=>{
    if (err) throw err;
    console.log('your data = '+data)
})



fs.writeFile('../../../js/data1.txt','this is jchanges',(err,data)=>{
    if (err) throw err;
    console.log('file create success');
})

console.log('after callback');










