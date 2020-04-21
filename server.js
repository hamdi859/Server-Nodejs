const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello world');
});

server.listen(4000, '127.0.0.1', () => {
    console.log('En listenning ...');
})



http.createServer((req, res) => {
    /*l'etat de la requéte dans la section header*/
    res.writeHead(200);
    /*l'etat de la requéte dans la section Body*/
    res.write('Hello world');
    res.end();
    return;
    /*Rester a l'écoute sur la port ||3000*/
}).listen(3000);