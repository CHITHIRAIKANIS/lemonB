const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', [
  body('email')
    .isEmail()
    .withMessage('Enter a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password is too weak')
], register);

router.post('/login', [
  body('email')
    .isEmail()
    .withMessage('Enter a valid email'),
  body('password')
    .exists()
    .withMessage('Password is required')
], login);

module.exports = router;
