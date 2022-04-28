import paramDAO from '../DAO/paramDAO';

function create() {

    async function getWarehouses() {
        let result = paramDAO.getWarehouses();
        if (result) {
            return result;
        }
    }

    async function addWarehouses(object) {
        let result = paramDAO.addWarehouses(object);
        if (result) {
            return result;
        }
    }

    async function getIndustrialPlants() {
        let result = paramDAO.getIndustrialPlants();
        if (result) {
            return result;
        }
    }

    async function addIndustrialPlants(object) {
        let result = paramDAO.addIndustrialPlants(object);
        if (result) {
            return result;
        }
    }

    async function getEntrance() {
        let result = paramDAO.getEntrance();
        if (result) {
           return result;
        }
    }

    async function addEntrance(object) {
        let result = paramDAO.addEntrance(object);
        if (result) {
            return result;
        }
    }

    return {
        getWarehouses: getWarehouses,
        addWarehouses: addWarehouses,
        getIndustrialPlants: getIndustrialPlants,
        addIndustrialPlants: addIndustrialPlants,
        getEntrance: getEntrance,
        addEntrance: addEntrance,
    };
}

export default {
    create: create
};

