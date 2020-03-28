const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/session', SessionController.create)

routes.post('/ongs', OngController.store)
routes.get('/ongs', OngController.index)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentsController.store)
routes.get('/incidents', IncidentsController.index)
routes.delete('/incidents/:id', IncidentsController.delete)


module.exports = routes