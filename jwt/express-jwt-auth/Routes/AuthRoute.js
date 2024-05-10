
const express = require('express');
const router = express.Router();
const { register, login, me } = require('../Controllers/AuthController');
const verifyToken = require('../Middleware/VerifyToken');

router.post('/register', register);
router.post('/login', login);
router.get('/me', verifyToken, me);

const jwt = require('jsonwebtoken');


module.exports = router