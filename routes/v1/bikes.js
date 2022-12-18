const express = require('express');
const router = express.Router();
const bikeController = require('../../controllers/bike');
const photoController = require('../../controllers/photo');

router.get('/', async (req, res, next) => {
		bikeController.getAll()
		.then(bikes => res.status(200).json(bikes))
		.catch(err => next(err));
});

router.get('/:id', async (req, res, next) => {
		bikeController.getById(req.params.id)
		.then(bike => bike ? res.status(200).json(bike) : res.status(404).json({ message: 'Bike not found' }))
		.catch(err => next(err));
});

router.post('/:id', async (req, res, next) => {
		bikeController.create(req.body)
		.then(bike => res.status(200).json(bike))
		.catch(err => next(err));
});

router.put('/:id', async (req, res, next) => {
		bikeController.update(req.params.id, req.body)
		.then(bike => res.status(200).json(bike))
		.catch(err => next(err));
});

router.get('/search', async (req, res, next) => {
		bikeController.search(req.query)
		.then(bikes => res.status(200).json(bikes))
		.catch(err => next(err));
});

router.get('/:id/photos', async (req, res, next) => {
		photoController.getPhotos(req.params.id)
		.then(photos => res.status(200).json(photos))
		.catch(err => next(err));
});

router.post('/:id/photos', async (req, res, next) => {
		photoController.addPhoto(req.params.id, req.body)
		.then(photos => res.status(200).json(photos))
		.catch(err => next(err));
});