var fs = require('fs')

//Synchronous method
/*//using FS module of nodejs to read from a file
var readme = fs.readFileSync('readme.txt', 'utf8')//encoding to read the file since its in binary format
//console.log(readme)

//using FS module of nodejs to write to a file
fs.writeFileSync('writeMe.txt', readme)*/


//ASynchronous method

fs.readFile('readme.txt', 'utf8', function (err,data) {
console.log(data)
    fs.writeFile('writeMe.txt', data,()=>{})
})

console.log('test')// Since the above call in asynchronous call, this statement is called while the above is reading the file