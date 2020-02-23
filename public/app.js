var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    console.log('request was made: '+req.url)

    if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'})
        fs.createReadStream('/public/views/contact.html').pipe(res)
    }else if(req.url === '/about')
    {
        res.writeHead(200, {'Content-Type':'text/html'})
        fs.createReadStream('/public/views/about.html').pipe(res)
    } else{
        res.writeHead(404, {'Content-Type':'text/html'})
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
})


server.listen(8080,'127.0.0.1')
console.log('Hey guys, listening on port 8080')