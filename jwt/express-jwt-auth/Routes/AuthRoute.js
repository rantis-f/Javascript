
const express = require('express');
const router = express.Router();
const { register, login, me,logout } = require('../Controllers/AuthController');
const verifyToken = require('../Middleware/VerifyToken');

router.post('/register', register);
router.post('/login', login);
router.get('/me', verifyToken, me);
router.post('/logout', verifyToken, logout);

const jwt = require('jsonwebtoken');


module.exports = router