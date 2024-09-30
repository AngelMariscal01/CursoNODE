const http = require('node:http')

const processRequest = (req, res) =>{
    const {method, url} = req
    switch (method){
        case 'GET':
            switch (url){
                case '/':
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>Mi página</h1>')
                default: 
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>Error 404</h1>')
            }
        case 'POST':
            switch (url){
                case '/pokemon':{
                    let body = ''
                    //Escuchar el evento data
                    req.on('data', chunk => {
                        body += chunk.toString()
                    })
                    req.on('end', () => {
                        const data = JSON.parse(body)
                        //llamar a una base de datos para guardar la info
                        res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'})
                        data.timestap = Date.now()
                        res.end(JSON.stringify(data))
                    })
                    break
                }
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    return res.end('404 NOT FOUND')
            }
            
    }
}
const server = http.createServer(processRequest)

server.listen(3001, () => {
    console.log(`server listening on port http://localhost:3001`)
})