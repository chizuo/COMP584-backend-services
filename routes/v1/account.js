const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user');

/******************************/
/* http://<domain>/v1/account */
/******************************/

// POST end point for account sign-up 
router.post('/register', async (req,res,next) => {
	userController.create(req.body)
		.then(user => res.status(200).json(user))
		.catch(err => next(err));
});

// GET end point for account login
router.get('/login', async (req, res, next) => {
	const auth = new Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString().split(':');
	const login = { username: auth[0], password: auth[1] }
	userController.authenticate(login)
		.then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
		.catch(err => next(err));
});

module.exports = router;