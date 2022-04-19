import express from 'express'

 export let rutas=express.Router()

//defino las rutas 

// *****************RUTAS PARA LOS SREVICIOS DE HABITACIONES *********************************

//1.Servicio agregsr habitacion

rutas.post('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })
  
  //2.Servicio para buscar  todas las habitaciones

  rutas.get('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })
  

//****************** */ RUTAS PARA LOS SERVICIOS DE RESERVA*******************************
