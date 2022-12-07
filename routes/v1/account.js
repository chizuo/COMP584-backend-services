const express = require('express');
const router = express.Router();

/******************************/
/* http://<domain>/v1/account */
/******************************/

// POST end point for account sign-up 
router.post('/account', async (req,res) => {
    let signupForm = req.body;
    let { user, password, email, name } = signupForm;
});

// GET end point for account login
router.get('/account', async (req,res) => {
    let loginForm = req.body;
    let { user, password } = loginForm;
});