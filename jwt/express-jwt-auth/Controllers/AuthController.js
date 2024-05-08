const { ExpressValidator } = require('express-validator')
const {registerUser} = require('./Models/AuthModel')
const {body, validationResult} = require('express-validator')
async function register(req,res){
    const validation= [
        body('email').isEmail().withMessage('Email is not valid'),
        body('email').isEmail().withMessage('Email is not valid'),
        body('email').isEmail().withMessage('Email is not valid'),
        body('email').isEmail().withMessage('Email is not valid'),

    ]
}
