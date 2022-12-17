const path = require("path");
const router = require('express').Router();
const isAuthenticated = require('../../utils/authService');
const accountRoute = require('./account');
const userRoutes = require('./users');
const bikeRoutes = require('./bikes');

router.use('/account', accountRoute);
router.use('/users', userRoutes);
router.use('/bikes', bikeRoutes);
router.get('/dashboard', isAuthenticated, (req, res) => { res.status(200); });
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../../client/build/index.html"));
});

module.exports = router;