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


  //3.Servicio para buscar por id las habitaciones


  rutas.get('/api/v1/habitaciones/id/', function (req, res) {
    res.send('Hello World')
  })

  
  //4. Servicio para Cambiar la habitacion

  rutas.put('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })

  //5. Servicio para eliminar la  habitacion


  rutas.delete('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })


//****************** */ RUTAS PARA LOS SERVICIOS DE RESERVA*******************************

//1.Servicio agregsr Reserva

rutas.post('/api/v1/reservas/', function (req, res) {
    res.send('Hello World')
  })
  
  //2.Servicio para buscar  reservas por ID

  rutas.get('/api/v1/reservas/id/', function (req, res) {
    res.send('Hello World')
  })


  //3.Servicio para editar reserva


  rutas.put('/api/v1/reservas/', function (req, res) {
    res.send('Hello World')
  })

  
  //4. Servicio para Cambiar la habitacion

  rutas.delete('/api/v1/reservas/', function (req, res) {
    res.send('Hello World')
  })

