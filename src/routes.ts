import express from 'express';
import SampleController from './controller/SampleController';


const routes = express.Router();
const sampleController = new SampleController

//SAMPLE ROUTE
routes.get('/sample', sampleController.index);

export default routes;