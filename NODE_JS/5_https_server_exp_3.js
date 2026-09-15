const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {

    //set status code and headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powered-By', 'Node.js');

    //send response
    res.end('Hello, World! This is a simple HTTP server built with Node.js.\n');
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});