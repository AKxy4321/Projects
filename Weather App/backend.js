const http = require('http');
const fs = require('fs');

function onRequest(req, res)
{
    if(req.url === '/weather.html' || req.url === '/')
    {
        fs.readFile('./weather.html', function (error, data)
        {
            if(error)
            {
                res.write("File not Found");
            }
            else
            {
                res.write(data);
            }
            res.end();
        });
    }
    else if(req.url === '/style.css')
    {
        res.write(fs.readFileSync('./style.css'));
        res.end();
    }
    else if(req.url === '/script.js')
    {
        res.write(fs.readFileSync('./script.js'));
        res.end();
    }
    else
    {
        res.write("Invalid Request");
        res.end();
    }
}

http.createServer(onRequest).listen(3000);