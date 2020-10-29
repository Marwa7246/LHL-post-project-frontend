const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.post('/api/signup', userController.signUp)

module.exports = router