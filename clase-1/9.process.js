// Argumentos de entrada
console.log(process.argv)

//Controlar el proceso y su salida

//process.exit(1)

// Controlar eventos del proceso
process.on('exit', () => {
    //Limpiar los recuros
})

//Current working directory
console.log(process.cwd())

// Plataform
console.log(process.env.PEPITO)