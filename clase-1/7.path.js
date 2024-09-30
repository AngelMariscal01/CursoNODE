const path = require('node:path')


// Barra separadora de caroetas segun SO
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfoleder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/mid/password.txt')
console.log(base)
const filename = path.basename('/tmp/mid/password.txt', '.txt')
console.log(filename)
const extension = path.extname('my.super.jpg')
console.log(extension)

