import http from 'node:http'

const porta = 3000

const periodo = new Date().toISOString()

const server = http.createServer();

server.on('request', (req, res) =>{
    console.log(`Servidor funcionando! ${req.method} ${req.url}`);
    console.log(`no periodo ${periodo}`);
    

    res.statusCode = 201
    res.setHeader('Content-Type', 'text/plain', 'charset: utf-8');
    res.end("Recurso criado");
});

server.listen(porta, () => {
    console.log(`Servidor funcionando na porta ${porta} `)
});