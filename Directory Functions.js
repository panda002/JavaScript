var fs = require('fs')

//fs.unlink('writeMe.txt',()=>{}) //deleteting or removing files

//Synchronous methods
//fs.mkdirSync('stuff')
//fs.rmdirSync('stuff')

//Asynchronous methods
/*
fs.mkdir('stuff', function () {
    fs.readFile('readme.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/writeMe.txt',data,err1 => {})

    })

})*/

fs.unlink('./stuff/writeMe.txt', function () {
    fs.rmdir('stuff', err => {
    })
})