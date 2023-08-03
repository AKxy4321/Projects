var http = require('http');
var fs = require('fs');

function onRequest(req,res)
{     
        if (req.url === '/calc.html' || req.url === '/') {
            fs.readFile('./calc.html', function (error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write('File Not Found');
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.write(data);
                }
                res.end();
            });
        }

        else if (req.url === '/calc.css') {
            res.setHeader('Content-type', 'text/css');
            res.write(fs.readFileSync('./calc.css'));         
            res.end();
            }

        else if(req.url === '/calc.js'){
            res.setHeader('Content-type', 'text/js');
            res.write(fs.readFileSync('./calc.js'));
            res.end();
            }

        else {
            res.write("invalid request")
            res.end();
            }

}

http.createServer(onRequest).listen(3000);