const db = require('../db/models/');
const Bike = db.Bicycle;

async function getAll() {
	return await Bike.findAll();
}

async function getById(id) {
	return await Bike.findOne({ where: {id: id } });
}

async function create(bikeParam) {
	const bike = Bike.build(bikeParam);
	console.log(bike);
	bike.owner = bikeParam.id;
	console.log(bike);
	try {
		await bike.save();
	} catch (err) {
		console.log(err);
	}
}

async function update(id, body) {
	const bike = await Bike.findOne({ where: {id: id } });
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