const http = require('http');
const fs = require('fs');

function serverFunction(req, res) {
    if (req.url === '/products') {
        const data = fs.readFileSync('product.json', 'utf-8');
        return res.end(data)
    } else if (req.url === '/user') {
        const data = fs.readFileSync('user.json', 'utf-8');
        return res.end(data)
    }
    return res.end("Invalid URL: " + req.url);
}

const server = http.createServer(serverFunction);

// const server = http.createServer((req, res) => {
//     if (req.url === '/products') {
//         const data = fs.readFileSync('product.json', 'utf-8');
//         return res.end(data)
//     } else if (req.url === '/user') {
//         const data = fs.readFileSync('user.json', 'utf-8');
//         return res.end(data)
//     }
//     return res.end("Invalid URL: " + req.url);
// });

server.listen(5200);
