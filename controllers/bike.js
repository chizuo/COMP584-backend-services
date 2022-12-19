const db = require('../db/models/');
const Bike = db.Bike;

async function getAll() {
		return await Bike.findAll();
}

async function getById(id) {
		return await Bike.findById(id);
}

async function create(bikeParam) {
		const bike = Bike.build(bikeParam);
		await bike.save();
}

module.exports = {
		getAll,
		getById,
		create
}