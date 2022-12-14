const express = require('express');
const router = express.Router();
const multer = require('multer');   
const bikeController = require('../../controllers/bike');
const photoController = require('../../controllers/photo');

// temp storage for the photo
const storage = multer.memoryStorage({
	destination: function (req, file, cb) {
			cb(null, '')
	}
})

// check the type of file which is uploaded
const filefilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
			cb(null, true)
	} else {
			cb(null, false)
	}
}

// configuration of photo being uploaded
const upload = multer({ storage: storage, fileFilter: filefilter });

router.get('/', async (req, res, next) => {
	bikeController.getAll()
	.then(bikes => res.status(200).json(bikes))
	.catch(err => next(err));
});

router.post('/', async (req, res, next) => {
	console.log(req.body);
	bikeController.create(req.body)
	.then(bike => res.status(200).json(bike))
	.catch(err => next(err));
});

router.get('/:id', async (req, res, next) => {
	console.log("get id")
	bikeController.getById(req.params.id)
	.then(bike => bike ? res.status(200).json(bike) : res.status(404).json({ message: 'Bike not found' }))
	.catch(err => next(err));
});

router.put('/:id', async (req, res, next) => {
		bikeController.update(req.params.id, req.body)
		.then(bike => res.status(200).json(bike))
		.catch(err => next(err));
});

router.get('/searchbar/search', async (req, res, next) => {
	console.log(req.query);
	bikeController.search(req.query)
	.then(bikes => res.status(200).json(bikes))
	.catch(err => next(err));
});

router.get('/:id/photos', async (req, res, next) => {
		photoController.getPhotos(req.params.id)
		.then(photos => res.status(200).json(photos))
		.catch(err => next(err));
});

router.post('/:id/photos', upload.single('bikeimage'), async (req, res, next) => {
		photoController.addPhoto(req.file, req.params.id)
		.then(photos => res.status(200).json(photos))
		.catch(err => next(err));
});

router.get('/dummy/data', async(req, res, next) => {
	let responseData = {
		"bikes": [{
		"title": "Bike1",
		"summary": "",
		"frame": "",
		"fork": "",
		"headset": "",
		"bottom_bracket": "",
		"crankset": "",
		"derailleurs": "",
		"shifters": "",
		"handlebars": "",
		"stem": "",
		"seatpost": "",
		"saddle": "",
		"brakes": "",
		"brake_levers": "",
		"pedals": "",
		"tires": "",
		"wheels": "",
		"accessories": "",
		"link" : ""
	},
	{
		"title": "Bike2",
		"summary": "",
		"frame": "",
		"fork": "",
		"headset": "",
		"bottom_bracket": "",
		"crankset": "",
		"derailleurs": "",
		"shifters": "",
		"handlebars": "",
		"stem": "",
		"seatpost": "",
		"saddle": "",
		"brakes": "",
		"brake_levers": "",
		"pedals": "",
		"tires": "",
		"wheels": "",
		"accessories": "",
		"link" : ""
	},
	{
		"title": "Bike3",
		"summary": "",
		"frame": "",
		"fork": "",
		"headset": "",
		"bottom_bracket": "",
		"crankset": "",
		"derailleurs": "",
		"shifters": "",
		"handlebars": "",
		"stem": "",
		"seatpost": "",
		"saddle": "",
		"brakes": "",
		"brake_levers": "",
		"pedals": "",
		"tires": "",
		"wheels": "",
		"accessories": "",
		"link" : ""
	},
	{
		"title": "Bike4",
		"summary": "",
		"frame": "",
		"fork": "",
		"headset": "",
		"bottom_bracket": "",
		"crankset": "",
		"derailleurs": "",
		"shifters": "",
		"handlebars": "",
		"stem": "",
		"seatpost": "",
		"saddle": "",
		"brakes": "",
		"brake_levers": "",
		"pedals": "",
		"tires": "",
		"wheels": "",
		"accessories": "",
		"link" : ""
	},
	{
		"title": "Bike5",
		"summary": "",
		"frame": "",
		"fork": "",
		"headset": "",
		"bottom_bracket": "",
		"crankset": "",
		"derailleurs": "",
		"shifters": "",
		"handlebars": "",
		"stem": "",
		"seatpost": "",
		"saddle": "",
		"brakes": "",
		"brake_levers": "",
		"pedals": "",
		"tires": "",
		"wheels": "",
		"accessories": "",
		"link" : ""
	},
	{
		"title": "Bike6",
		"summary": "",
		"frame": "",
		"fork": "",
		"headset": "",
		"bottom_bracket": "",
		"crankset": "",
		"derailleurs": "",
		"shifters": "",
		"handlebars": "",
		"stem": "",
		"seatpost": "",
		"saddle": "",
		"brakes": "",
		"brake_levers": "",
		"pedals": "",
		"tires": "",
		"wheels": "",
		"accessories": "",
		"link" : ""
	},
	{
		"title": "Bike7",
		"summary": "",
		"frame": "",
		"fork": "",
		"headset": "",
		"bottom_bracket": "",
		"crankset": "",
		"derailleurs": "",
		"shifters": "",
		"handlebars": "",
		"stem": "",
		"seatpost": "",
		"saddle": "",
		"brakes": "",
		"brake_levers": "",
		"pedals": "",
		"tires": "",
		"wheels": "",
		"accessories": "",
		"link" : ""
	}
	]}
	res.status(200).json(responseData);
});

module.exports = router;