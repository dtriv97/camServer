const http = require('http');
const exec = require("child_process").exec;

// NOTE: This is the Raspberry Pi's local IP Address
const hostname = '192.168.86.24';

// Port to listen/send on the IP Address
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log("Request received.");
    res.writeHead(200, {"Content-Type" : "text/plain"})
    res.end('Hello World!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
