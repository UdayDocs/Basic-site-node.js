// const http = require('http');
const http = require('http');
const fs = require('fs');
const path = require('path')


const PORT = 8080;

const server = http.createServer((req, res) => {
    let filePath;

    switch (req.url) {
        case '/' :
            filePath = path.join(__dirname,'index.html');
            break;
        case '/about' :
                filePath = path.join(__dirname,'about.html');
                break;        
        case '/contact' :
                    filePath = path.join(__dirname,'contact.html');
                    break;
        default :
               filePath = path.join(__dirname,'404.html');
                break;
    }


    fs.readFile(filePath, (err, content) => {
        if(err) {
            res.writeHead(500,{'content-type':'text/plain'});
            res.end('server error')
        } else {
            res.writeHead(200,{'content-type':'text/html'});
            res.end(content)
        }
    });
});


server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});





