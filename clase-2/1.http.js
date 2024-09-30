const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

// StatusCode
// 200 OK, 301 Moved Permanently, 400 Bad Request, 404 Not Found
// 500 InternalServerError


const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if(req.url == '/'){
        res.statusCode = 200
        res.end('<h1>Bienvenido a mi página de inicio</h1>')
    } else if(req.url == '/imagen-super-bonita.png'){
        fs.readFile('./Captura.png', (err, data) => {
            if (err){
                res.statusCode = 500
                res.end('<h1>500 InternalServerError</h1>')
            }else{
                res.statusCode = 200
                res.setHeader('Content-type', 'image/png')
                res.end(data)
            }
        })
    } else if(req.url == '/contacto'){
        res.statusCode = 200
        res.end('<h1>Contacto</h1>')
    }else{
        res.statusCode = 404
        res.end('<h1>404</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})