const fs = require('node:fs') // apartir de node 16 es recomendable poner node: (fs =file system)
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)
