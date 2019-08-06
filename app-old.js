const http = require('http');

http.createServer( (req, res)=> {

    res.writeHead(200,{'Content-Type': 'application/json'});

        let salida = {
            nombre: 'Simon',
            Apellido: 'Clemente',
            edad: '23',
            ciudad: 'Maracay',
            url: req.url
        }    
    
    res.write(JSON.stringify(salida));
        res.end();
    }).listen(8080);

console.log('Escuchando el server en el puerto 8080');