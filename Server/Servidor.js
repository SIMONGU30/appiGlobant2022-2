//importo el paquete Express
//const express = require('express')
import express from'express'

//importrar las rutas del API
import{rutas} from '../routes/rutas.js'

   export class Servidor{
    constructor(){

        // atributo que se llama app dpnde almaceno la funcionalidad

        this.app = express()
        this.atenderServicios()
    }




    // metodos

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`servidor encendido en  ${process.env.PORT}`)
        })
        
    }

    atenderServicios(){

        this.app.use('/',rutas)   

    }

    conectarconBd(){

    }


}