var express = require('express')
var router = express.Router()

var auth_controller = require('../controllers/authController');

router.get('/register', auth_controller.register);

module.exports = router;

