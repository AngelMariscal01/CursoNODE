const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    res.send('<h1>Mi página</h1>')
})

app.post('/pokemon', (req,res) => {
    let body = ''
    //Escuchar el evento data
    req.on('data', chunk => {
        body += chunk.toString()
    })
    req.on('end', () => {
        const data = JSON.parse(body)
        //llamar a una base de datos para guardar la info
        data.timestap = Date.now()
        res.status(201).json(data)
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})