const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;
const html = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});
