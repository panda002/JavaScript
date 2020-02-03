var http = require('http')
var fs = require('fs')


var server = http.createServer(function (req, res) {
    console.log('request was made: '+req.url)
        fs.readFile('./public/views/viewTextInBrowser.txt', 'utf8', function (err, data) {
        res.writeHead(200,{'Content-Type': 'text/plain'})
        res.end(data) // will be printed on browser on 127.0.0.1:8080
    })
})

server.listen(8080, '127.0.0.1')
console.log('Server is now listening to port 8080')
