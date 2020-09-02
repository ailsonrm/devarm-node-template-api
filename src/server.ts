import express from 'express';
const actuator = require('express-actuator');
import routes from './routes';

const app = express();

app.use(actuator());
app.use(express.json());
app.use(routes);

app.listen(3333);