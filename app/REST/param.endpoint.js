import business from '../business/business.container';
import applicationException from "../service/applicationException";

const paramEndpoint = (router) => {

    router.get('/api/warehouses', async (request, response, next) => {
        try {
            let result = await business.getParamManager().getWarehouses();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/warehouses', async (request, response, next) =>{
        try {
            let result = await business.getParamManager().addWarehouses(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/industrialplants', async (request, response, next) => {
        try {
            let result = await business.getParamManager().getIndustrialPlants();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/industrialplants', async (request, response, next) =>{
        try {
            let result = await business.getParamManager().addIndustrialPlants(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/entrance', async (request, response, next) => {
        try {
            let result = await business.getParamManager().getEntrance();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/entrance', async (request, response, next) =>{
        try {
            let result = await business.getParamManager().addEntrance(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};
export default paramEndpoint;
