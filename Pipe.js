var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    console.log('request was made: '+req.url)
    res.writeHead(200,{'Content-Type': 'text/plain'})
    var myreadstream = fs.createReadStream(__dirname + '/readMe.txt','utf8')
    myreadstream.pipe(res)

    //res.end('hey Sidharth') // will be printed on browser on 127.0.0.1:3000

})

server.listen(3000, '127.0.0.1')
console.log('Yo dawgs, now listening to port 3000')