const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db/models/');
const User = db.User;

async function getAll() {
    return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}

async function create(userParam) {
    // validate
    if (await User.findOne({where: { username: userParam.username }})) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function update(userParam) {
    const user = await User.findOne({where: { username: userParam.username }});

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({where: { username: userParam.username }})) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.password = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}

async function authenticate({ username, password }) {
	const user = await User.findOne({where: { username: username }});
	if (user && bcrypt.compareSync(password, user.password)) {
			const token = jwt.sign({ sub: user.id }, "LOL MUCH SECRET", { expiresIn: '7d' });
			return {
					...user.toJSON(),
					token
			};
	}
}

module.exports = {
	authenticate,
	getAll,
	getById,
	create,
	update,
	delete: _delete
};