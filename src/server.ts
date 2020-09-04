import express from 'express'
import routes from './routes'
const actuator = require('express-actuator')

const app = express()

app.use(actuator())
app.use(express.json())
app.use(routes)

const port = (process.env.PORT || 3333)
app.listen(port, () => console.log('Listening on port ' + port))
