const expressJwt = require('express-jwt');
const userController = require('../controllers/user');

function jwtHelper() {
    const secret = "LOL MUCH SECRET";
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/v1/account/login',
            '/v1/account/register',
            '/v1/bikes/dummy/data'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userController.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};

module.exports = jwtHelper;