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
<<<<<<< HEAD
	const { username, password } = req.body;	
=======
	const { username, password } = req.body;
	/*try {
		let response = await accountController.createUser(username, req.body);
		let token = jwt.sign({ username: username }, "LOL MUCH SECRET", { expiresIn: '7d' });
		response.token = token;
		res.status(200).send(response);
	} catch(error) {
		res.status(400).send(error);
	}
	*/
	
>>>>>>> 702c144 (fk in models)
	const login = { username: username, password: password }
	userController.create(req.body)
		.then(user => {
			userController.authenticate(login)
				.then(user => user ? res.status(200).json(user) : res.status(400).json({ message: 'an Insert Error occurred' }))
<<<<<<< HEAD
		}).catch(err => next(err)); 
=======
		}).catch(err => next(err));
>>>>>>> 702c144 (fk in models)
});

// GET end point for account login
router.get('/login', async (req, res, next) => {
<<<<<<< HEAD
	const auth = new Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString().split(':');
	const login = { username: auth[0], password: auth[1] }
	userController.authenticate(login)
		.then(user => user ? res.status(201).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
		.catch(err => next(err)); 
=======
	
	const { username, password } = req.body;
	const login = { username: username, password: password }
	/*try {
		let response = await accountController.getUser(login.username, login.password);
		let token = jwt.sign({ username: login.username }, "LOL MUCH SECRET", { expiresIn: '7d' });
		response.token = token;
		res.status(201).send(response);
	} catch(error) {
		res.status(404).send(error);
	}
	*/
	userController.authenticate(login)
		.then(user => user ? res.status(201).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
		.catch(err => next(err));
>>>>>>> 702c144 (fk in models)
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
