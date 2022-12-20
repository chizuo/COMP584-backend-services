const db = require('../db/models/');
const { Op } = require("sequelize");
const Bike = db.Bicycle;

async function getAll() {
	return await Bike.findAll();
}

async function getById(id) {
	return await Bike.findOne({ where: {id: id } });
}

async function create(bikeParam) {
	const bike = Bike.build(bikeParam);
	bike.owner = bikeParam.userId;
	try {
		await bike.save();
		return bike;
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
							[Op.like]: `%${query.title}%`
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