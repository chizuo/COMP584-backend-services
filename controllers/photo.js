const db = require('../db/models/');
const Photo = db.Photo;
const AWS = require('aws-sdk');

async function getPhotos(id) {
	return await Photo.findAll({where: { bicycleId: id }});
}

async function addPhoto(file, id) {
	// create S3 instance
	const s3 = new AWS.S3({
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
	});

	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: file.originalname,
		Body: file.buffer,
		ACL: "public-read-write",
		ContentType: "image/jpeg"
	};

	// upload to s3
	s3.upload(params, async (error, data) => {
		if (error) {
				throw {"err":error}
		}	
		// save uri to db
		const photo = Photo.build({ 
			uri: data.Location,
			bicycleId: id
		});

		await photo.save();
	});

	return "Photo added";
	
}

module.exports = {
	getPhotos,
	addPhoto
}