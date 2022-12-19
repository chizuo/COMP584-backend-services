const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userController = require('../../controllers/user');
//const userController = require('../../Controller/user');

/******************************/
/* http://<domain>/v1/account */
/******************************/

// POST end point for account sign-up 
router.post('/register', async (req,res,next) => {
	const { username, password } = req.body;	
	const login = { username: username, password: password }
	userController.create(req.body)
		.then(user => {
			userController.authenticate(login)
				.then(user => user ? res.status(200).json(user) : res.status(400).json({ message: 'an Insert Error occurred' }))
		}).catch(err => next(err)); 
});

// GET end point for account login
router.get('/login', async (req, res, next) => {
	const { username, password } = req.body;	
	const login = { username: username, password: password }
	userController.authenticate(login)
		.then(user => user ? res.status(201).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
		.catch(err => next(err)); 
});

router.put('/updateInfo', async(req, res, next) => {
	try {
		let response = await userController.updateUser(req.body.username, req.body);
		res.status(200).send(response);
	} catch(error) {
		res.status(404).send(error);
	}
});

router.put('/updatePassword', async(req, res, next) => {
	try {
		let response = await userController.updatePassword(req.body.username, req.body.password, req.body.newpw);
		res.status(200).send(response);
	} catch(error) {
		res.status(404).send(error);
	}
});

module.exports = router;
