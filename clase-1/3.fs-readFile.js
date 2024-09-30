const fs = require('node:fs')

console.log('Leyendo el primer archivo ...')
const text = fs.readFile('./archivo.txt', 'utf-8', (err,text) => {
    console.log('Primer texto: ', text)
})


console.log('-----Hacer cosas mientras lee el archivo ...')

console.log('Leyendo el segundo archivo ...')
const secondText = fs.readFile('./archivo2.txt', 'utf-8', (err,secondText) => {
    console.log('Segundo archivo: ', secondText)
})