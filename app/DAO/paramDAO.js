import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const warehousesSchema = new mongoose.Schema({
    whatIsInside: {type: String},
    business: {type: String},
    isSomeOneInside: {type: String},
    packingOrUnpacking: {type: String},
    openTime: {type: String},
    airQuality: {type: String},
}, {
    collection: 'warehouses'
});
warehousesSchema.plugin(uniqueValidator);

const CollectionWarehouses = mongoose.model('warehouses', warehousesSchema);

async function getWarehouses() {
    const result = await CollectionWarehouses.find({});
    {
        if (result) {
            return mongoConverter(result)
        }
    }
}

async function addWarehouses(object) {
    const result = await CollectionWarehouses.create(object);
    {
        if (result) {
            return mongoConverter(result)
        }
    }
}

const industrialPlantsSchema = new mongoose.Schema({
    name: {type: String},
    typeOfIndustrialPlant: {type: String},
    numberOfWorkers: {type: String},
    openTime: {type: String},
}, {
    collection: 'industrialPlants'
});
industrialPlantsSchema.plugin(uniqueValidator);

const CollectionIndustrialPlants = mongoose.model('industrialPlants', industrialPlantsSchema);

async function getIndustrialPlants() {
    const result = await CollectionIndustrialPlants.find({});
    {
        if (result) {
            return mongoConverter(result)
        }
    }
}

async function addIndustrialPlants(object) {
    const result = await CollectionIndustrialPlants.create(object);
    {
        if (result) {
            return mongoConverter(result)
        }
    }
}

const entranceSchema = new mongoose.Schema({
    isQueue: {type: Number},
    place: {type: String},
}, {
    collection: 'entrance'
});
entranceSchema.plugin(uniqueValidator);

const CollectionEntrance = mongoose.model('entrance', entranceSchema);

async function getEntrance() {
    const result = await CollectionEntrance.find({});
    {
        if (result) {
            return mongoConverter(result)
        }
    }
}

async function addEntrance(object) {
    const result = await CollectionEntrance.create(object);
    {
        if (result) {
            return mongoConverter(result)
        }
    }
}

export default {

    getWarehouses: getWarehouses,
    addWarehouses: addWarehouses,
    getIndustrialPlants: getIndustrialPlants,
    addIndustrialPlants: addIndustrialPlants,
    getEntrance: getEntrance,
    addEntrance: addEntrance,

    model: CollectionWarehouses,
    model: CollectionIndustrialPlants,
    model: CollectionEntrance,
};
