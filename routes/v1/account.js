const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userController = require('../../controllers/user');

/******************************/
/* http://<domain>/v1/account */
/******************************/

// POST end point for account sign-up 
router.post('/register', async (req,res,next) => {
	/*
	const user = req.body;
	const token = jwt.sign({ sub: req.body.username }, "LOL MUCH SECRET", { expiresIn: '7d' });
	user.token = token;
	console.log(user);
	res.status(200).json(user);
	*/
	userController.create(req.body)
		.then(user => res.status(200).json(user))
		.catch(err => next(err));
});

// GET end point for account login
router.get('/login', async (req, res, next) => {
	const auth = new Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString().split(':');
	const login = { username: auth[0], password: auth[1] }
	/*const token = jwt.sign({ sub: login.username }, "LOL MUCH SECRET", { expiresIn: '7d' });
	const user = { username: login.username }
	user.token = token;
	res.status(201).json(user); */
	userController.authenticate(login)
		.then(user => user ? res.status(201).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
		.catch(err => next(err)); 
});

module.exports = router;