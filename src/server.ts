import express from 'express';
const actuator = require('express-actuator');
import routes from './routes';

const app = express();

app.use(actuator());
app.use(express.json());
app.use(routes);

const port = (process.env.PORT || 3333);
app.listen(port, () => console.log("Listening on port " + port));