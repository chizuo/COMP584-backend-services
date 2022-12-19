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

async function update(id, body) {
		const bike = await Bike.findById(id);
		Object.assign(bike, body);
		await bike.save();
}

async function search(query) {
		return await Bike.findAll({
				where: {
						title: {
							[Op.like]: `%${query}%`
						}
				}
		});
}

module.exports = {
		getAll,
		getById,
		create,
		update,
		search
}